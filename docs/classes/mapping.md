[@tabetalt/pulumix](../README.md) › [Mapping](mapping.md)

# Class: Mapping

## Hierarchy

* CustomResource

  ↳ **Mapping**

## Index

### Constructors

* [constructor](mapping.md#constructor)

### Properties

* [apiVersion](mapping.md#readonly-apiversion)
* [id](mapping.md#readonly-id)
* [kind](mapping.md#readonly-kind)
* [metadata](mapping.md#readonly-metadata)
* [urn](mapping.md#readonly-urn)

### Methods

* [getInputs](mapping.md#getinputs)
* [getProvider](mapping.md#getprovider)
* [get](mapping.md#static-get)
* [isInstance](mapping.md#static-isinstance)

## Constructors

###  constructor

\+ **new Mapping**(`name`: string, `args`: [MappingSpec](../interfaces/mappingspec.md), `opts?`: pulumi.ComponentResourceOptions): *[Mapping](mapping.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`args` | [MappingSpec](../interfaces/mappingspec.md) |
`opts?` | pulumi.ComponentResourceOptions |

**Returns:** *[Mapping](mapping.md)*

## Properties

### `Readonly` apiVersion

• **apiVersion**: *pulumi.Output‹string›*

*Inherited from [Mapping](mapping.md).[apiVersion](mapping.md#readonly-apiversion)*

APIVersion defines the versioned schema of this representation of an object. Servers should
convert recognized schemas to the latest internal value, and may reject unrecognized
values. More info:
https://git.k8s.io/community/contributors/devel/api-conventions.md#resources

___

### `Readonly` id

• **id**: *Output‹ID›*

*Inherited from [Mapping](mapping.md).[id](mapping.md#readonly-id)*

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

___

### `Readonly` kind

• **kind**: *pulumi.Output‹string›*

*Inherited from [Mapping](mapping.md).[kind](mapping.md#readonly-kind)*

Kind is a string value representing the REST resource this object represents. Servers may
infer this from the endpoint the client submits requests to. Cannot be updated. In
CamelCase. More info:
https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds

___

### `Readonly` metadata

• **metadata**: *pulumi.Output‹ObjectMeta›*

*Inherited from [Mapping](mapping.md).[metadata](mapping.md#readonly-metadata)*

Standard object metadata; More info:
https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.

___

### `Readonly` urn

• **urn**: *Output‹URN›*

*Inherited from [Mapping](mapping.md).[urn](mapping.md#readonly-urn)*

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

## Methods

###  getInputs

▸ **getInputs**(): *CustomResourceArgs*

*Inherited from [Mapping](mapping.md).[getInputs](mapping.md#getinputs)*

**Returns:** *CustomResourceArgs*

___

###  getProvider

▸ **getProvider**(`moduleMember`: string): *ProviderResource | undefined*

*Inherited from [Mapping](mapping.md).[getProvider](mapping.md#getprovider)*

**Parameters:**

Name | Type |
------ | ------ |
`moduleMember` | string |

**Returns:** *ProviderResource | undefined*

___

### `Static` get

▸ **get**(`name`: string, `opts`: CustomResourceGetOptions): *CustomResource*

*Inherited from [Mapping](mapping.md).[get](mapping.md#static-get)*

Get an existing CustomResource resource's state with the given name, ID, and optional extra
properties used to qualify the lookup.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The _unique_ name of the resulting resource. |
`opts` | CustomResourceGetOptions | Uniquely specifies a CustomResource to select.  |

**Returns:** *CustomResource*

___

### `Static` isInstance

▸ **isInstance**(`obj`: any): *obj is CustomResource*

*Inherited from [Mapping](mapping.md).[isInstance](mapping.md#static-isinstance)*

*Overrides void*

Returns true if the given object is an instance of CustomResource.  This is designed to work even when
multiple copies of the Pulumi SDK have been loaded into the same process.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *obj is CustomResource*
