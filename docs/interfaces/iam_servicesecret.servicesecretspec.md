[@tabetalt/pulumix](../README.md) / [iam/ServiceSecret](../modules/iam_servicesecret.md) / ServiceSecretSpec

# Interface: ServiceSecretSpec

[iam/ServiceSecret](../modules/iam_servicesecret.md).ServiceSecretSpec

## Table of contents

### Properties

- [accountId](iam_servicesecret.servicesecretspec.md#accountid)
- [namespace](iam_servicesecret.servicesecretspec.md#namespace)
- [roles](iam_servicesecret.servicesecretspec.md#roles)

## Properties

### accountId

• **accountId**: *Input*<string\>

The account id that is used to generate the service
account email address and a stable unique id. It is unique within a project,
must be 6-30 characters long, and match the regular expression `a-z`
to comply with RFC1035. Changing this forces a new service account to be created.

Defined in: [src/iam/ServiceSecret.ts:13](https://github.com/tabetalt/pulumix/blob/c3434ad/src/iam/ServiceSecret.ts#L13)

___

### namespace

• `Optional` **namespace**: *Input*<string\>

Defined in: [src/iam/ServiceSecret.ts:20](https://github.com/tabetalt/pulumix/blob/c3434ad/src/iam/ServiceSecret.ts#L20)

___

### roles

• **roles**: *Input*<string[]\>

The role that should be applied. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.

Defined in: [src/iam/ServiceSecret.ts:18](https://github.com/tabetalt/pulumix/blob/c3434ad/src/iam/ServiceSecret.ts#L18)
