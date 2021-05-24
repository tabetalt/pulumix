[@tabetalt/pulumix](../README.md) / [helpers/Config](../modules/helpers_config.md) / Config

# Class: Config

[helpers/Config](../modules/helpers_config.md).Config

Config Class

**`example`**
```typescript
import * as pulumix from '@tabetalt/pulumix';

const config = new pulumi.helpers.Config();
config.get('defaultDomain');
```

## Table of contents

### Constructors

- [constructor](helpers_config.config.md#constructor)

### Methods

- [get](helpers_config.config.md#get)
- [getGCPProvider](helpers_config.config.md#getgcpprovider)
- [getK8SProvider](helpers_config.config.md#getk8sprovider)

## Constructors

### constructor

\+ **new Config**(): [*Config*](helpers_config.config.md)

**Returns:** [*Config*](helpers_config.config.md)

## Methods

### get

▸ **get**<K\>(`key`: *string*): *Output*<undefined \| Unwrap<K\>\>

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `K` | *string* | *string* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* |

**Returns:** *Output*<undefined \| Unwrap<K\>\>

Defined in: [src/helpers/Config.ts:19](https://github.com/tabetalt/pulumix/blob/c3434ad/src/helpers/Config.ts#L19)

___

### getGCPProvider

▸ **getGCPProvider**(): *Provider*

**Returns:** *Provider*

Defined in: [src/helpers/Config.ts:32](https://github.com/tabetalt/pulumix/blob/c3434ad/src/helpers/Config.ts#L32)

___

### getK8SProvider

▸ **getK8SProvider**(): *Provider*

**Returns:** *Provider*

Defined in: [src/helpers/Config.ts:27](https://github.com/tabetalt/pulumix/blob/c3434ad/src/helpers/Config.ts#L27)
