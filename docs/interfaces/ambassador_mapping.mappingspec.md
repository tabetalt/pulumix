[@tabetalt/pulumix](../README.md) / [ambassador/Mapping](../modules/ambassador_mapping.md) / MappingSpec

# Interface: MappingSpec

[ambassador/Mapping](../modules/ambassador_mapping.md).MappingSpec

## Indexable

▪ [T: *string*]: *any*

## Table of contents

### Properties

- [bypassAuth](ambassador_mapping.mappingspec.md#bypassauth)
- [cors](ambassador_mapping.mappingspec.md#cors)
- [grpc](ambassador_mapping.mappingspec.md#grpc)
- [host](ambassador_mapping.mappingspec.md#host)
- [namespace](ambassador_mapping.mappingspec.md#namespace)
- [opts](ambassador_mapping.mappingspec.md#opts)
- [prefix](ambassador_mapping.mappingspec.md#prefix)
- [serviceName](ambassador_mapping.mappingspec.md#servicename)
- [servicePort](ambassador_mapping.mappingspec.md#serviceport)

## Properties

### bypassAuth

• `Optional` **bypassAuth**: *Input*<boolean\>

Should we bypass authentication?

Defined in: [src/ambassador/Mapping.ts:17](https://github.com/tabetalt/pulumix/blob/015837c/src/ambassador/Mapping.ts#L17)

___

### cors

• `Optional` **cors**: *object*

Enables Cross-Origin Resource Sharing (CORS) setting on a mapping

#### Type declaration

| Name | Type |
| :------ | :------ |
| `credentials?` | *Input*<boolean\> |
| `headers?` | *Input*<string[]\> |
| `methods?` | *Input*<string[]\> |
| `origins?` | *Input*<string[]\> |

Defined in: [src/ambassador/Mapping.ts:25](https://github.com/tabetalt/pulumix/blob/015837c/src/ambassador/Mapping.ts#L25)

___

### grpc

• `Optional` **grpc**: *Input*<boolean\>

If true, tells the system that the service will be handling gRPC calls.

Defined in: [src/ambassador/Mapping.ts:21](https://github.com/tabetalt/pulumix/blob/015837c/src/ambassador/Mapping.ts#L21)

___

### host

• **host**: *Input*<string\>

**`example`** service.v1.api.service.com

Defined in: [src/ambassador/Mapping.ts:13](https://github.com/tabetalt/pulumix/blob/015837c/src/ambassador/Mapping.ts#L13)

___

### namespace

• `Optional` **namespace**: *Input*<string\>

Defined in: [src/ambassador/Mapping.ts:5](https://github.com/tabetalt/pulumix/blob/015837c/src/ambassador/Mapping.ts#L5)

___

### opts

• `Optional` **opts**: ComponentResourceOptions

Defined in: [src/ambassador/Mapping.ts:37](https://github.com/tabetalt/pulumix/blob/015837c/src/ambassador/Mapping.ts#L37)

___

### prefix

• `Optional` **prefix**: *Input*<string\>

Prefix

Defined in: [src/ambassador/Mapping.ts:9](https://github.com/tabetalt/pulumix/blob/015837c/src/ambassador/Mapping.ts#L9)

___

### serviceName

• **serviceName**: *Input*<string\>

Defined in: [src/ambassador/Mapping.ts:31](https://github.com/tabetalt/pulumix/blob/015837c/src/ambassador/Mapping.ts#L31)

___

### servicePort

• `Optional` **servicePort**: *Input*<number\>

Service Port
Defaults to 8080

Defined in: [src/ambassador/Mapping.ts:36](https://github.com/tabetalt/pulumix/blob/015837c/src/ambassador/Mapping.ts#L36)
