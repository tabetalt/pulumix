[@tabetalt/pulumix](../README.md) / [apps/GRPCService](../modules/apps_grpcservice.md) / GRPCService

# Class: GRPCService

[apps/GRPCService](../modules/apps_grpcservice.md).GRPCService

Apps.GRPCService

Generic GRPC Service

**`example`**
```typescript
import * as pulumix from '@tabetalt/pulumix';

const service = new pulumix.apps.GRPCService('account', {
 image: 'busybox',
});
```

## Hierarchy

- *ComponentResource*

  ↳ **GRPCService**

## Table of contents

### Constructors

- [constructor](apps_grpcservice.grpcservice.md#constructor)

### Properties

- [deployment](apps_grpcservice.grpcservice.md#deployment)
- [mapping](apps_grpcservice.grpcservice.md#mapping)
- [name](apps_grpcservice.grpcservice.md#name)
- [opts](apps_grpcservice.grpcservice.md#opts)
- [service](apps_grpcservice.grpcservice.md#service)
- [urn](apps_grpcservice.grpcservice.md#urn)

### Methods

- [getData](apps_grpcservice.grpcservice.md#getdata)
- [getProvider](apps_grpcservice.grpcservice.md#getprovider)
- [initialize](apps_grpcservice.grpcservice.md#initialize)
- [registerOutputs](apps_grpcservice.grpcservice.md#registeroutputs)
- [isInstance](apps_grpcservice.grpcservice.md#isinstance)

## Constructors

### constructor

\+ **new GRPCService**(`name`: *string*, `args`: [*GRPCServiceSpec*](../interfaces/apps_grpcservice.grpcservicespec.md), `opts?`: CustomResourceOptions): [*GRPCService*](apps_grpcservice.grpcservice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
| `args` | [*GRPCServiceSpec*](../interfaces/apps_grpcservice.grpcservicespec.md) |
| `opts?` | CustomResourceOptions |

**Returns:** [*GRPCService*](apps_grpcservice.grpcservice.md)

Overrides: pulumi.ComponentResource.constructor

Defined in: [src/apps/GRPCService.ts:78](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/GRPCService.ts#L78)

## Properties

### deployment

• `Readonly` **deployment**: *Deployment*

Defined in: [src/apps/GRPCService.ts:76](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/GRPCService.ts#L76)

___

### mapping

• `Readonly` **mapping**: [*Mapping*](ambassador_mapping.mapping.md)

Defined in: [src/apps/GRPCService.ts:78](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/GRPCService.ts#L78)

___

### name

• `Private` `Readonly` **name**: *string*

Defined in: [src/apps/GRPCService.ts:73](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/GRPCService.ts#L73)

___

### opts

• `Private` `Optional` `Readonly` **opts**: CustomResourceOptions

Defined in: [src/apps/GRPCService.ts:74](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/GRPCService.ts#L74)

___

### service

• `Readonly` **service**: *Service*

Defined in: [src/apps/GRPCService.ts:77](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/GRPCService.ts#L77)

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
