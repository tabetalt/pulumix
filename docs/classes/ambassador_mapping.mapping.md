[@tabetalt/pulumix](../README.md) / [ambassador/Mapping](../modules/ambassador_mapping.md) / Mapping

# Class: Mapping

[ambassador/Mapping](../modules/ambassador_mapping.md).Mapping

## Hierarchy

- *CustomResource*

  ↳ **Mapping**

## Table of contents

### Constructors

- [constructor](ambassador_mapping.mapping.md#constructor)

### Properties

- [apiVersion](ambassador_mapping.mapping.md#apiversion)
- [id](ambassador_mapping.mapping.md#id)
- [kind](ambassador_mapping.mapping.md#kind)
- [metadata](ambassador_mapping.mapping.md#metadata)
- [urn](ambassador_mapping.mapping.md#urn)

### Methods

- [getInputs](ambassador_mapping.mapping.md#getinputs)
- [getProvider](ambassador_mapping.mapping.md#getprovider)
- [get](ambassador_mapping.mapping.md#get)
- [isInstance](ambassador_mapping.mapping.md#isinstance)

## Constructors

### constructor

\+ **new Mapping**(`name`: *string*, `args`: [*MappingSpec*](../interfaces/ambassador_mapping.mappingspec.md), `opts?`: ComponentResourceOptions): [*Mapping*](ambassador_mapping.mapping.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
| `args` | [*MappingSpec*](../interfaces/ambassador_mapping.mappingspec.md) |
| `opts?` | ComponentResourceOptions |

**Returns:** [*Mapping*](ambassador_mapping.mapping.md)

Overrides: k8s.apiextensions.CustomResource.constructor

Defined in: [src/ambassador/Mapping.ts:41](https://github.com/tabetalt/pulumix/blob/4049994/src/ambassador/Mapping.ts#L41)

## Properties

### apiVersion

• `Readonly` **apiVersion**: *Output*<string\>

APIVersion defines the versioned schema of this representation of an object. Servers should
convert recognized schemas to the latest internal value, and may reject unrecognized
values. More info:
https://git.k8s.io/community/contributors/devel/api-conventions.md#resources

Inherited from: k8s.apiextensions.CustomResource.apiVersion

Defined in: node_modules/@pulumi/kubernetes/apiextensions/customResource.d.ts:25

___

### id

• `Readonly` **id**: *Output*<string\>

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

Inherited from: k8s.apiextensions.CustomResource.id

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:273

___

### kind

• `Readonly` **kind**: *Output*<string\>

Kind is a string value representing the REST resource this object represents. Servers may
infer this from the endpoint the client submits requests to. Cannot be updated. In
CamelCase. More info:
https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds

Inherited from: k8s.apiextensions.CustomResource.kind

Defined in: node_modules/@pulumi/kubernetes/apiextensions/customResource.d.ts:32

___

### metadata

• `Readonly` **metadata**: *Output*<ObjectMeta\>

Standard object metadata; More info:
https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.

Inherited from: k8s.apiextensions.CustomResource.metadata

Defined in: node_modules/@pulumi/kubernetes/apiextensions/customResource.d.ts:37

___

### urn

• `Readonly` **urn**: *Output*<string\>

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

Inherited from: k8s.apiextensions.CustomResource.urn

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:17

## Methods

### getInputs

▸ **getInputs**(): CustomResourceArgs

**Returns:** CustomResourceArgs

Inherited from: k8s.apiextensions.CustomResource.getInputs

Defined in: node_modules/@pulumi/kubernetes/apiextensions/customResource.d.ts:38

___

### getProvider

▸ **getProvider**(`moduleMember`: *string*): *undefined* \| *ProviderResource*

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleMember` | *string* |

**Returns:** *undefined* \| *ProviderResource*

Inherited from: k8s.apiextensions.CustomResource.getProvider

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:19

___

### get

▸ `Static` **get**(`name`: *string*, `opts`: CustomResourceGetOptions): *CustomResource*

Get an existing CustomResource resource's state with the given name, ID, and optional extra
properties used to qualify the lookup.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | *string* | The _unique_ name of the resulting resource. |
| `opts` | CustomResourceGetOptions | Uniquely specifies a CustomResource to select. |

**Returns:** *CustomResource*

Inherited from: k8s.apiextensions.CustomResource.get

Defined in: node_modules/@pulumi/kubernetes/apiextensions/customResource.d.ts:18

___

### isInstance

▸ `Static` **isInstance**(`obj`: *any*): obj is CustomResource

Returns true if the given object is an instance of CustomResource.  This is designed to work even when
multiple copies of the Pulumi SDK have been loaded into the same process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | *any* |

**Returns:** obj is CustomResource

Inherited from: k8s.apiextensions.CustomResource.isInstance

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:278
