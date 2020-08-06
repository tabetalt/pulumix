[@tabetalt/pulumix](../README.md) › [ServiceSecretSpec](servicesecretspec.md)

# Interface: ServiceSecretSpec

## Hierarchy

* **ServiceSecretSpec**

## Index

### Properties

* [accountId](servicesecretspec.md#accountid)
* [namespace](servicesecretspec.md#optional-namespace)
* [roles](servicesecretspec.md#roles)

## Properties

###  accountId

• **accountId**: *pulumi.Input‹string›*

The account id that is used to generate the service
account email address and a stable unique id. It is unique within a project,
must be 6-30 characters long, and match the regular expression `a-z`
to comply with RFC1035. Changing this forces a new service account to be created.

___

### `Optional` namespace

• **namespace**? : *pulumi.Input‹string›*

___

###  roles

• **roles**: *pulumi.Input‹string[]›*

The role that should be applied. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
