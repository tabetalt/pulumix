[@tabetalt/pulumix](../README.md) / [iam/ServiceSecret](../modules/iam_servicesecret.md) / ServiceSecret

# Class: ServiceSecret

[iam/ServiceSecret](../modules/iam_servicesecret.md).ServiceSecret

Service Secret

Create a Service Account with a defined role, creates a key
and adds that into a Kubernetes Secret.

This is typically used to create inject a Service Account
into a pod for it to have access to other services.

** The secret is stored under `credentials.json` **

**`example`**
```typescript
import * as pulumix from '@tabetalt/pulumix';
const firebaseServiceSecret = new pulumix.iam.ServiceSecret('firebase', {
 roles: [
   'roles/cloudsql.admin'
 ],
})
```

## Hierarchy

- *ComponentResource*

  ↳ **ServiceSecret**

## Table of contents

### Constructors

- [constructor](iam_servicesecret.servicesecret.md#constructor)

### Properties

- [account](iam_servicesecret.servicesecret.md#account)
- [key](iam_servicesecret.servicesecret.md#key)
- [members](iam_servicesecret.servicesecret.md#members)
- [name](iam_servicesecret.servicesecret.md#name)
- [opts](iam_servicesecret.servicesecret.md#opts)
- [secret](iam_servicesecret.servicesecret.md#secret)
- [urn](iam_servicesecret.servicesecret.md#urn)

### Methods

- [getData](iam_servicesecret.servicesecret.md#getdata)
- [getProvider](iam_servicesecret.servicesecret.md#getprovider)
- [initialize](iam_servicesecret.servicesecret.md#initialize)
- [registerOutputs](iam_servicesecret.servicesecret.md#registeroutputs)
- [isInstance](iam_servicesecret.servicesecret.md#isinstance)

## Constructors

### constructor

\+ **new ServiceSecret**(`name`: *string*, `args`: [*ServiceSecretSpec*](../interfaces/iam_servicesecret.servicesecretspec.md), `opts?`: ComponentResourceOptions, `config?`: [*Config*](helpers_config.config.md)): [*ServiceSecret*](iam_servicesecret.servicesecret.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
| `args` | [*ServiceSecretSpec*](../interfaces/iam_servicesecret.servicesecretspec.md) |
| `opts?` | ComponentResourceOptions |
| `config?` | [*Config*](helpers_config.config.md) |

**Returns:** [*ServiceSecret*](iam_servicesecret.servicesecret.md)

Overrides: pulumi.ComponentResource.constructor

Defined in: [src/iam/ServiceSecret.ts:52](https://github.com/tabetalt/pulumix/blob/7c7cd7b/src/iam/ServiceSecret.ts#L52)

## Properties

### account

• `Readonly` **account**: *Account*

Defined in: [src/iam/ServiceSecret.ts:49](https://github.com/tabetalt/pulumix/blob/7c7cd7b/src/iam/ServiceSecret.ts#L49)

___

### key

• `Readonly` **key**: *Key*

Defined in: [src/iam/ServiceSecret.ts:51](https://github.com/tabetalt/pulumix/blob/7c7cd7b/src/iam/ServiceSecret.ts#L51)

___

### members

• `Readonly` **members**: *Output*<IAMMember[]\>

Defined in: [src/iam/ServiceSecret.ts:50](https://github.com/tabetalt/pulumix/blob/7c7cd7b/src/iam/ServiceSecret.ts#L50)

___

### name

• `Private` `Readonly` **name**: *string*

Defined in: [src/iam/ServiceSecret.ts:46](https://github.com/tabetalt/pulumix/blob/7c7cd7b/src/iam/ServiceSecret.ts#L46)

___

### opts

• `Private` `Optional` `Readonly` **opts**: ComponentResourceOptions

Defined in: [src/iam/ServiceSecret.ts:47](https://github.com/tabetalt/pulumix/blob/7c7cd7b/src/iam/ServiceSecret.ts#L47)

___

### secret

• `Readonly` **secret**: *Secret*

Defined in: [src/iam/ServiceSecret.ts:52](https://github.com/tabetalt/pulumix/blob/7c7cd7b/src/iam/ServiceSecret.ts#L52)

___

### urn

• `Readonly` **urn**: *Output*<string\>

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

Inherited from: pulumi.ComponentResource.urn

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:17

## Methods

### getData

▸ `Protected` **getData**(): *Promise*<any\>

Retrieves the data produces by [initialize].  The data is immediately available in a
derived class's constructor after the `super(...)` call to `ComponentResource`.

**Returns:** *Promise*<any\>

Inherited from: pulumi.ComponentResource.getData

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:347

___

### getProvider

▸ **getProvider**(`moduleMember`: *string*): *undefined* \| *ProviderResource*

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleMember` | *string* |

**Returns:** *undefined* \| *ProviderResource*

Inherited from: pulumi.ComponentResource.getProvider

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:19

___

### initialize

▸ `Protected` **initialize**(`args`: Inputs): *Promise*<any\>

Can be overridden by a subclass to asynchronously initialize data for this Component
automatically when constructed.  The data will be available immediately for subclass
constructors to use.  To access the data use `.getData`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | Inputs |

**Returns:** *Promise*<any\>

Inherited from: pulumi.ComponentResource.initialize

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:342

___

### registerOutputs

▸ `Protected` **registerOutputs**(`outputs?`: Inputs \| *Promise*<Inputs\> \| *Output*<Inputs\>): *void*

registerOutputs registers synthetic outputs that a component has initialized, usually by
allocating other child sub-resources and propagating their resulting property values.

ComponentResources can call this at the end of their constructor to indicate that they are
done creating child resources.  This is not strictly necessary as this will automatically be
called after the `initialize` method completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputs?` | Inputs \| *Promise*<Inputs\> \| *Output*<Inputs\> |

**Returns:** *void*

Inherited from: pulumi.ComponentResource.registerOutputs

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:356

___

### isInstance

▸ `Static` **isInstance**(`obj`: *any*): obj is ComponentResource<any\>

Returns true if the given object is an instance of CustomResource.  This is designed to work even when
multiple copies of the Pulumi SDK have been loaded into the same process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | *any* |

**Returns:** obj is ComponentResource<any\>

Inherited from: pulumi.ComponentResource.isInstance

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:322
