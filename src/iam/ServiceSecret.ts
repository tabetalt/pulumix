import * as k8s from '@pulumi/kubernetes';
import * as gcp from '@pulumi/gcp';
import * as pulumi from '@pulumi/pulumi';
import { Config } from '../helpers/Config';

export interface ServiceSecretSpec {
  /**
   * The account id that is used to generate the service
   * account email address and a stable unique id. It is unique within a project,
   * must be 6-30 characters long, and match the regular expression `a-z`
   * to comply with RFC1035. Changing this forces a new service account to be created.
   */
  accountId: pulumi.Input<string>;
  /**
   * The role that should be applied. Note that custom roles must be of the format
   * `[projects|organizations]/{parent-name}/roles/{role-name}`.
   */
  roles: pulumi.Input<string[]>;

  namespace?: pulumi.Input<string>;
}

/**
 * Service Secret
 *
 * Create a Service Account with a defined role, creates a key
 * and adds that into a Kubernetes Secret.
 *
 * This is typically used to create inject a Service Account
 * into a pod for it to have access to other services.
 *
 * ** The secret is stored under `credentials.json` **
 *
 * @example
 * ```typescript
 * import * as pulumix from '@tabetalt/pulumix';
 * const firebaseServiceSecret = new pulumix.iam.ServiceSecret('firebase', {
 *  roles: [
 *    'roles/cloudsql.admin'
 *  ],
 * })
 * ```
 * @public
 */
export class ServiceSecret extends pulumi.ComponentResource {
  private readonly name: string;
  private readonly opts?: pulumi.ComponentResourceOptions;

  readonly account: gcp.serviceAccount.Account;
  readonly members: pulumi.Output<gcp.projects.IAMMember[]>;
  readonly key: gcp.serviceAccount.Key;
  readonly secret: k8s.core.v1.Secret;

  constructor(
    name: string,
    args: ServiceSecretSpec,
    opts?: pulumi.ComponentResourceOptions,
    config?: Config
  ) {
    super('apps:service-secret', name, args, opts);

    const { accountId, roles, namespace } = args;

    this.account = new gcp.serviceAccount.Account(
      `${name}-service`,
      {
        accountId,
      },
      { parent: this }
    );

    this.key = new gcp.serviceAccount.Key(
      `${name}-key`,
      {
        serviceAccountId: this.account.accountId,
      },
      { parent: this }
    );

    this.members = pulumi.output(roles).apply((roles) =>
      roles.map(
        (role) =>
          new gcp.projects.IAMMember(
            `${name}-service`,
            {
              role,
              member: this.account.email.apply((a) => `serviceAccount:${a}`),
            },
            { parent: this }
          )
      )
    );

    this.secret = new k8s.core.v1.Secret(
      `${name}-secret`,
      {
        metadata: {
          name,
          namespace,
        },
        data: {
          'credentials.json': this.key.privateKey,
        },
      },
      {
        parent: this,
      }
    );
  }
}
