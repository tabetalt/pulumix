[@tabetalt/pulumix](../README.md) › [GRPCServiceSpec](grpcservicespec.md)

# Interface: GRPCServiceSpec

## Hierarchy

* **GRPCServiceSpec**

## Index

### Properties

* [domain](grpcservicespec.md#optional-domain)
* [env](grpcservicespec.md#optional-env)
* [image](grpcservicespec.md#image)
* [mapping](grpcservicespec.md#optional-mapping)
* [namespace](grpcservicespec.md#optional-namespace)
* [ports](grpcservicespec.md#ports)
* [serviceSecret](grpcservicespec.md#optional-servicesecret)
* [version](grpcservicespec.md#optional-version)

## Properties

### `Optional` domain

• **domain**? : *pulumi.Input‹string›*

Domain
defaults to: <name>.<mayor-version>.<default-domain>

___

### `Optional` env

• **env**? : *kx.types.EnvMap*

Environment variables

___

###  image

• **image**: *pulumi.Input‹string›*

Docker image name.
More info: https://kubernetes.io/docs/concepts/containers/images

___

### `Optional` mapping

• **mapping**? : *[MappingSpec](mappingspec.md)*

Mapping Resource
defaults to:
 - serviceName: <name>-service
 - host: <domain>
 - bypassAuth: false
 - servicePort: <port>

___

### `Optional` namespace

• **namespace**? : *pulumi.Input‹string›*

Namespace

___

###  ports

• **ports**: *kx.types.Container["ports"]*

Ports

___

### `Optional` serviceSecret

• **serviceSecret**? : *pulumi.Input‹string›*

GCP Service Account Secret Name

This can be used in combination with iam.ServiceSecret.
The string is the name of the secret to attach to.

___

### `Optional` version

• **version**? : *pulumi.Input‹string›*

Version
default to: process.env.VERSION || dev
