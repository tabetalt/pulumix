[@tabetalt/pulumix](../README.md) › [Config](config.md)

# Class: Config

Config Class

**`example`** 
```typescript
import * as pulumix from '@tabetalt/pulumix';

const config = new pulumi.helpers.Config();
config.get('defaultDomain');
```

## Hierarchy

* **Config**

## Index

### Methods

* [get](config.md#get)
* [getGCPProvider](config.md#getgcpprovider)
* [getK8SProvider](config.md#getk8sprovider)

## Methods

###  get

▸ **get**‹**K**›(`key`: string): *OutputInstance‹undefined› | OutputInstance‹undefined›*

**Type parameters:**

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *OutputInstance‹undefined› | OutputInstance‹undefined›*

___

###  getGCPProvider

▸ **getGCPProvider**(): *Provider*

**Returns:** *Provider*

___

###  getK8SProvider

▸ **getK8SProvider**(): *Provider*

**Returns:** *Provider*
