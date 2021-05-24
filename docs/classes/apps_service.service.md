[@tabetalt/pulumix](../README.md) / [apps/Service](../modules/apps_service.md) / Service

# Class: Service

[apps/Service](../modules/apps_service.md).Service

Apps.Service

Generic service consisting of best practise deployment, service and Ambassador Mapping.

**`example`**
```typescript
import * as pulumix from '@tabetalt/pulumix';

const service = new pulumix.apps.Service('account', {
 image: 'busybox',
 domain: 'busy.example.com',
});
```

## Hierarchy

- *ComponentResource*

  ↳ **Service**

## Table of contents

### Constructors

- [constructor](apps_service.service.md#constructor)

### Properties

- [deployment](apps_service.service.md#deployment)
- [mapping](apps_service.service.md#mapping)
- [name](apps_service.service.md#name)
- [opts](apps_service.service.md#opts)
- [service](apps_service.service.md#service)
- [urn](apps_service.service.md#urn)

### Methods

- [getData](apps_service.service.md#getdata)
- [getProvider](apps_service.service.md#getprovider)
- [initialize](apps_service.service.md#initialize)
- [registerOutputs](apps_service.service.md#registeroutputs)
- [isInstance](apps_service.service.md#isinstance)

## Constructors

### constructor

\+ **new Service**(`name`: *string*, `args`: [*ServiceSpec*](../interfaces/apps_service.servicespec.md), `opts?`: CustomResourceOptions, `config?`: [*Config*](helpers_config.config.md)): [*Service*](apps_service.service.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
| `args` | [*ServiceSpec*](../interfaces/apps_service.servicespec.md) |
| `opts?` | CustomResourceOptions |
| `config?` | [*Config*](helpers_config.config.md) |

**Returns:** [*Service*](apps_service.service.md)

Overrides: pulumi.ComponentResource.constructor

Defined in: [src/apps/Service.ts:77](https://github.com/tabetalt/pulumix/blob/4049994/src/apps/Service.ts#L77)

## Properties

### deployment

• `Readonly` **deployment**: *Deployment*

Defined in: [src/apps/Service.ts:75](https://github.com/tabetalt/pulumix/blob/4049994/src/apps/Service.ts#L75)

___

### mapping

• `Readonly` **mapping**: [*Mapping*](ambassador_mapping.mapping.md)

Defined in: [src/apps/Service.ts:77](https://github.com/tabetalt/pulumix/blob/4049994/src/apps/Service.ts#L77)

___

### name

• `Private` `Readonly` **name**: *string*

Defined in: [src/apps/Service.ts:72](https://github.com/tabetalt/pulumix/blob/4049994/src/apps/Service.ts#L72)

___

### opts

• `Private` `Optional` `Readonly` **opts**: CustomResourceOptions

Defined in: [src/apps/Service.ts:73](https://github.com/tabetalt/pulumix/blob/4049994/src/apps/Service.ts#L73)

___

### service

• `Readonly` **service**: *Service*

Defined in: [src/apps/Service.ts:76](https://github.com/tabetalt/pulumix/blob/4049994/src/apps/Service.ts#L76)

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
