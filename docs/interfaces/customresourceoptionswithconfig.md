[@tabetalt/pulumix](../README.md) › [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md)

# Interface: CustomResourceOptionsWithConfig

Custom Resource Options with extendable Config

This is used to extend configuration.

**`example`** 
```typescript
class CustomConfig {
 get(key: string) {
   const getConfig = async (key: string) => {
     ...some async code
     return something
   }
   return pulumi.output(getConfig(key));
 }
}

const config = new CustomConfig();

const resource = new resource('name', {}, {
 config,
})
```

## Hierarchy

* CustomResourceOptions

  ↳ **CustomResourceOptionsWithConfig**

## Index

### Properties

* [additionalSecretOutputs](customresourceoptionswithconfig.md#optional-additionalsecretoutputs)
* [aliases](customresourceoptionswithconfig.md#optional-aliases)
* [config](customresourceoptionswithconfig.md#config)
* [customTimeouts](customresourceoptionswithconfig.md#optional-customtimeouts)
* [deleteBeforeReplace](customresourceoptionswithconfig.md#optional-deletebeforereplace)
* [dependsOn](customresourceoptionswithconfig.md#optional-dependson)
* [id](customresourceoptionswithconfig.md#optional-id)
* [ignoreChanges](customresourceoptionswithconfig.md#optional-ignorechanges)
* [import](customresourceoptionswithconfig.md#optional-import)
* [parent](customresourceoptionswithconfig.md#optional-parent)
* [protect](customresourceoptionswithconfig.md#optional-protect)
* [provider](customresourceoptionswithconfig.md#optional-provider)
* [transformations](customresourceoptionswithconfig.md#optional-transformations)
* [version](customresourceoptionswithconfig.md#optional-version)

## Properties

### `Optional` additionalSecretOutputs

• **additionalSecretOutputs**? : *string[]*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[additionalSecretOutputs](customresourceoptionswithconfig.md#optional-additionalsecretoutputs)*

The names of outputs for this resource that should be treated as secrets. This augments the list that
the resource provider and pulumi engine already determine based on inputs to your resource. It can be used
to mark certain ouputs as a secrets on a per resource basis.

___

### `Optional` aliases

• **aliases**? : *Input‹URN | Alias›[]*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[aliases](customresourceoptionswithconfig.md#optional-aliases)*

An optional list of aliases to treat this resource as matching.

___

###  config

• **config**: *[Config](../classes/config.md)*

___

### `Optional` customTimeouts

• **customTimeouts**? : *CustomTimeouts*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[customTimeouts](customresourceoptionswithconfig.md#optional-customtimeouts)*

An optional customTimeouts configuration block.

___

### `Optional` deleteBeforeReplace

• **deleteBeforeReplace**? : *undefined | false | true*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[deleteBeforeReplace](customresourceoptionswithconfig.md#optional-deletebeforereplace)*

When set to true, deleteBeforeReplace indicates that this resource should be deleted before its replacement
is created when replacement is necessary.

___

### `Optional` dependsOn

• **dependsOn**? : *Input‹Input‹Resource›[]› | Input‹Resource›*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[dependsOn](customresourceoptionswithconfig.md#optional-dependson)*

An optional additional explicit dependencies on other resources.

___

### `Optional` id

• **id**? : *Input‹ID›*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[id](customresourceoptionswithconfig.md#optional-id)*

An optional existing ID to load, rather than create.

___

### `Optional` ignoreChanges

• **ignoreChanges**? : *string[]*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[ignoreChanges](customresourceoptionswithconfig.md#optional-ignorechanges)*

Ignore changes to any of the specified properties.

___

### `Optional` import

• **import**? : *ID*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[import](customresourceoptionswithconfig.md#optional-import)*

When provided with a resource ID, import indicates that this resource's provider should import its state from
the cloud resource with the given ID. The inputs to the resource's constructor must align with the resource's
current state. Once a resource has been imported, the import property must be removed from the resource's
options.

___

### `Optional` parent

• **parent**? : *Resource*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[parent](customresourceoptionswithconfig.md#optional-parent)*

An optional parent resource to which this resource belongs.

___

### `Optional` protect

• **protect**? : *undefined | false | true*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[protect](customresourceoptionswithconfig.md#optional-protect)*

When set to true, protect ensures this resource cannot be deleted.

___

### `Optional` provider

• **provider**? : *ProviderResource*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[provider](customresourceoptionswithconfig.md#optional-provider)*

An optional provider to use for this resource's CRUD operations. If no provider is supplied,
the default provider for the resource's package will be used. The default provider is pulled
from the parent's provider bag (see also ComponentResourceOptions.providers).

If this is a [ComponentResourceOptions] do not provide both [provider] and [providers]

___

### `Optional` transformations

• **transformations**? : *ResourceTransformation[]*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[transformations](customresourceoptionswithconfig.md#optional-transformations)*

Optional list of transformations to apply to this resource during construction. The
transformations are applied in order, and are applied prior to transformation applied to
parents walking from the resource up to the stack.

___

### `Optional` version

• **version**? : *undefined | string*

*Inherited from [CustomResourceOptionsWithConfig](customresourceoptionswithconfig.md).[version](customresourceoptionswithconfig.md#optional-version)*

An optional version, corresponding to the version of the provider plugin that should be used when operating on
this resource. This version overrides the version information inferred from the current package and should
rarely be used.
