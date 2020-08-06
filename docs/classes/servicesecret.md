[@tabetalt/pulumix](../README.md) › [ServiceSecret](servicesecret.md)

# Class: ServiceSecret ‹**TData**›

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

## Type parameters

▪ **TData**

## Hierarchy

* ComponentResource

  ↳ **ServiceSecret**

## Index

### Constructors

* [constructor](servicesecret.md#constructor)

### Properties

* [account](servicesecret.md#readonly-account)
* [key](servicesecret.md#readonly-key)
* [members](servicesecret.md#readonly-members)
* [name](servicesecret.md#private-readonly-name)
* [opts](servicesecret.md#private-optional-readonly-opts)
* [secret](servicesecret.md#readonly-secret)
* [urn](servicesecret.md#readonly-urn)

### Methods

* [getData](servicesecret.md#protected-getdata)
* [getProvider](servicesecret.md#getprovider)
* [initialize](servicesecret.md#protected-initialize)
* [registerOutputs](servicesecret.md#protected-registeroutputs)
* [isInstance](servicesecret.md#static-isinstance)

## Constructors

###  constructor

\+ **new ServiceSecret**(`name`: string, `args`: [ServiceSecretSpec](../interfaces/servicesecretspec.md), `opts?`: pulumi.ComponentResourceOptions, `config?`: [Config](config.md)): *[ServiceSecret](servicesecret.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`args` | [ServiceSecretSpec](../interfaces/servicesecretspec.md) |
`opts?` | pulumi.ComponentResourceOptions |
`config?` | [Config](config.md) |

**Returns:** *[ServiceSecret](servicesecret.md)*

## Properties

### `Readonly` account

• **account**: *Account*

___

### `Readonly` key

• **key**: *Key*

___

### `Readonly` members

• **members**: *pulumi.Output‹IAMMember[]›*

___

### `Private` `Readonly` name

• **name**: *string*

___

### `Private` `Optional` `Readonly` opts

• **opts**? : *pulumi.ComponentResourceOptions*

___

### `Readonly` secret

• **secret**: *Secret*

___

### `Readonly` urn

• **urn**: *Output‹URN›*

*Inherited from [Service](service.md).[urn](service.md#readonly-urn)*

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

## Methods

### `Protected` getData

▸ **getData**(): *Promise‹TData›*

*Inherited from [Service](service.md).[getData](service.md#protected-getdata)*

Retrieves the data produces by [initialize].  The data is immediately available in a
derived class's constructor after the `super(...)` call to `ComponentResource`.

**Returns:** *Promise‹TData›*

___

###  getProvider

▸ **getProvider**(`moduleMember`: string): *ProviderResource | undefined*

*Inherited from [Service](service.md).[getProvider](service.md#getprovider)*

**Parameters:**

Name | Type |
------ | ------ |
`moduleMember` | string |

**Returns:** *ProviderResource | undefined*

___

### `Protected` initialize

▸ **initialize**(`args`: Inputs): *Promise‹TData›*

*Inherited from [Service](service.md).[initialize](service.md#protected-initialize)*

Can be overridden by a subclass to asynchronously initialize data for this Component
automatically when constructed.  The data will be available immediately for subclass
constructors to use.  To access the data use `.getData`.

**Parameters:**

Name | Type |
------ | ------ |
`args` | Inputs |

**Returns:** *Promise‹TData›*

___

### `Protected` registerOutputs

▸ **registerOutputs**(`outputs?`: Inputs | Promise‹Inputs› | Output‹Inputs›): *void*

*Inherited from [Service](service.md).[registerOutputs](service.md#protected-registeroutputs)*

registerOutputs registers synthetic outputs that a component has initialized, usually by
allocating other child sub-resources and propagating their resulting property values.

ComponentResources can call this at the end of their constructor to indicate that they are
done creating child resources.  This is not strictly necessary as this will automatically be
called after the `initialize` method completes.

**Parameters:**

Name | Type |
------ | ------ |
`outputs?` | Inputs &#124; Promise‹Inputs› &#124; Output‹Inputs› |

**Returns:** *void*

___

### `Static` isInstance

▸ **isInstance**(`obj`: any): *obj is ComponentResource*

*Inherited from [Service](service.md).[isInstance](service.md#static-isinstance)*

*Overrides void*

Returns true if the given object is an instance of CustomResource.  This is designed to work even when
multiple copies of the Pulumi SDK have been loaded into the same process.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *obj is ComponentResource*
