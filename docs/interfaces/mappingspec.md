[@tabetalt/pulumix](../README.md) › [MappingSpec](mappingspec.md)

# Interface: MappingSpec

## Hierarchy

* **MappingSpec**

## Indexable

* \[ **T**: *string*\]: any

## Index

### Properties

* [bypassAuth](mappingspec.md#optional-bypassauth)
* [cors](mappingspec.md#optional-cors)
* [grpc](mappingspec.md#optional-grpc)
* [host](mappingspec.md#host)
* [namespace](mappingspec.md#optional-namespace)
* [opts](mappingspec.md#optional-opts)
* [serviceName](mappingspec.md#servicename)
* [servicePort](mappingspec.md#optional-serviceport)

## Properties

### `Optional` bypassAuth

• **bypassAuth**? : *pulumi.Input‹boolean›*

Should we bypass authentication?

___

### `Optional` cors

• **cors**? : *undefined | object*

Enables Cross-Origin Resource Sharing (CORS) setting on a mapping

___

### `Optional` grpc

• **grpc**? : *pulumi.Input‹boolean›*

If true, tells the system that the service will be handling gRPC calls.

___

###  host

• **host**: *pulumi.Input‹string›*

**`example`** service.v1.api.service.com

___

### `Optional` namespace

• **namespace**? : *pulumi.Input‹string›*

___

### `Optional` opts

• **opts**? : *pulumi.ComponentResourceOptions*

___

###  serviceName

• **serviceName**: *pulumi.Input‹string›*

___

### `Optional` servicePort

• **servicePort**? : *pulumi.Input‹number›*

Service Port
Defaults to 8080
