[@tabetalt/pulumix](../README.md) › [DockerService](dockerservice.md)

# Class: DockerService ‹**TData**›

Creates a Docker-based service

**`example`** 
```typescript
import * as pulumix from '@tabetalt/pulumix';
const dockerService = new pulumix.apps.DockerService('service', {
 build: '../backend',
 version: require('../package.json').version,
})
```

## Type parameters

▪ **TData**

## Hierarchy

* ComponentResource

  ↳ **DockerService**

## Index

### Constructors

* [constructor](dockerservice.md#constructor)

### Properties

* [args](dockerservice.md#private-args)
* [image](dockerservice.md#readonly-image)
* [name](dockerservice.md#private-readonly-name)
* [opts](dockerservice.md#private-optional-readonly-opts)
* [service](dockerservice.md#readonly-service)
* [urn](dockerservice.md#readonly-urn)

### Methods

* [getData](dockerservice.md#protected-getdata)
* [getProvider](dockerservice.md#getprovider)
* [initialize](dockerservice.md#protected-initialize)
* [registerOutputs](dockerservice.md#protected-registeroutputs)
* [isInstance](dockerservice.md#static-isinstance)

## Constructors

###  constructor

\+ **new DockerService**(`name`: string, `args`: [DockerServiceSpec](../interfaces/dockerservicespec.md), `opts?`: pulumi.ComponentResourceOptions, `config?`: [Config](config.md)): *[DockerService](dockerservice.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`args` | [DockerServiceSpec](../interfaces/dockerservicespec.md) |
`opts?` | pulumi.ComponentResourceOptions |
`config?` | [Config](config.md) |

**Returns:** *[DockerService](dockerservice.md)*

## Properties

### `Private` args

• **args**: *[DockerServiceSpec](../interfaces/dockerservicespec.md)*

___

### `Readonly` image

• **image**: *Image*

___

### `Private` `Readonly` name

• **name**: *string*

___

### `Private` `Optional` `Readonly` opts

• **opts**? : *pulumi.ComponentResourceOptions*

___

### `Readonly` service

• **service**: *[Service](service.md)*

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
