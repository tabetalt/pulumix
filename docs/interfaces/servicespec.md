[@tabetalt/pulumix](../README.md) › [ServiceSpec](servicespec.md)

# Interface: ServiceSpec

## Hierarchy

* **ServiceSpec**

## Index

### Properties

* [domain](servicespec.md#optional-domain)
* [env](servicespec.md#optional-env)
* [image](servicespec.md#image)
* [mapping](servicespec.md#optional-mapping)
* [port](servicespec.md#optional-port)
* [serviceSecret](servicespec.md#optional-servicesecret)
* [version](servicespec.md#optional-version)

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

### `Optional` port

• **port**? : *pulumi.Input‹number›*

Port
defaults to: 8080

___

### `Optional` serviceSecret

• **serviceSecret**? : *[ServiceSecret](../classes/servicesecret.md)*

GCP Service Account Secret Name

This can be used in combination with iam.ServiceSecret.

___

### `Optional` version

• **version**? : *pulumi.Input‹string›*

Version
default to: process.env.VERSION || dev
