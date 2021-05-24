[@tabetalt/pulumix](../README.md) / [apps/DockerService](../modules/apps_dockerservice.md) / DockerService

# Class: DockerService

[apps/DockerService](../modules/apps_dockerservice.md).DockerService

Creates a Docker-based service

**`example`**
```typescript
import * as pulumix from '@tabetalt/pulumix';
const dockerService = new pulumix.apps.DockerService('service', {
 build: '../backend',
 version: require('../package.json').version,
})
```

## Hierarchy

- *ComponentResource*

  ↳ **DockerService**

## Table of contents

### Constructors

- [constructor](apps_dockerservice.dockerservice.md#constructor)

### Properties

- [args](apps_dockerservice.dockerservice.md#args)
- [image](apps_dockerservice.dockerservice.md#image)
- [name](apps_dockerservice.dockerservice.md#name)
- [opts](apps_dockerservice.dockerservice.md#opts)
- [service](apps_dockerservice.dockerservice.md#service)
- [urn](apps_dockerservice.dockerservice.md#urn)

### Methods

- [getData](apps_dockerservice.dockerservice.md#getdata)
- [getProvider](apps_dockerservice.dockerservice.md#getprovider)
- [initialize](apps_dockerservice.dockerservice.md#initialize)
- [registerOutputs](apps_dockerservice.dockerservice.md#registeroutputs)
- [isInstance](apps_dockerservice.dockerservice.md#isinstance)

## Constructors

### constructor

\+ **new DockerService**(`name`: *string*, `args`: [*DockerServiceSpec*](../interfaces/apps_dockerservice.dockerservicespec.md), `opts?`: ComponentResourceOptions, `config?`: [*Config*](helpers_config.config.md)): [*DockerService*](apps_dockerservice.dockerservice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
| `args` | [*DockerServiceSpec*](../interfaces/apps_dockerservice.dockerservicespec.md) |
| `opts?` | ComponentResourceOptions |
| `config?` | [*Config*](helpers_config.config.md) |

**Returns:** [*DockerService*](apps_dockerservice.dockerservice.md)

Overrides: pulumi.ComponentResource.constructor

Defined in: [src/apps/DockerService.ts:38](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/DockerService.ts#L38)

## Properties

### args

• `Private` **args**: [*DockerServiceSpec*](../interfaces/apps_dockerservice.dockerservicespec.md)

Defined in: [src/apps/DockerService.ts:38](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/DockerService.ts#L38)

___

### image

• `Readonly` **image**: *Image*

Defined in: [src/apps/DockerService.ts:36](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/DockerService.ts#L36)

___

### name

• `Private` `Readonly` **name**: *string*

Defined in: [src/apps/DockerService.ts:32](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/DockerService.ts#L32)

___

### opts

• `Private` `Optional` `Readonly` **opts**: ComponentResourceOptions

Defined in: [src/apps/DockerService.ts:33](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/DockerService.ts#L33)

___

### service

• `Readonly` **service**: [*Service*](apps_service.service.md)

Defined in: [src/apps/DockerService.ts:35](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/DockerService.ts#L35)

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
