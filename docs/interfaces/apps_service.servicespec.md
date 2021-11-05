[@tabetalt/pulumix](../README.md) / [apps/Service](../modules/apps_service.md) / ServiceSpec

# Interface: ServiceSpec

[apps/Service](../modules/apps_service.md).ServiceSpec

## Table of contents

### Properties

- [domain](apps_service.servicespec.md#domain)
- [env](apps_service.servicespec.md#env)
- [image](apps_service.servicespec.md#image)
- [mapping](apps_service.servicespec.md#mapping)
- [port](apps_service.servicespec.md#port)
- [serviceSecret](apps_service.servicespec.md#servicesecret)
- [version](apps_service.servicespec.md#version)

## Properties

### domain

• `Optional` **domain**: *Input*<string\>

Domain
defaults to: <name>.<mayor-version>.<default-domain>

Defined in: [src/apps/Service.ts:31](https://github.com/tabetalt/pulumix/blob/3f491a9/src/apps/Service.ts#L31)

___

### env

• `Optional` **env**: EnvMap

Environment variables

Defined in: [src/apps/Service.ts:12](https://github.com/tabetalt/pulumix/blob/3f491a9/src/apps/Service.ts#L12)

___

### image

• **image**: *Input*<string\>

Docker image name.
More info: https://kubernetes.io/docs/concepts/containers/images

Defined in: [src/apps/Service.ts:37](https://github.com/tabetalt/pulumix/blob/3f491a9/src/apps/Service.ts#L37)

___

### mapping

• `Optional` **mapping**: [*MappingSpec*](ambassador_mapping.mappingspec.md)

Mapping Resource
defaults to:
 - serviceName: <name>-service
 - host: <domain>
 - bypassAuth: false
 - servicePort: <port>

Defined in: [src/apps/Service.ts:53](https://github.com/tabetalt/pulumix/blob/3f491a9/src/apps/Service.ts#L53)

___

### port

• `Optional` **port**: *Input*<number\>

Port
defaults to: 8080

Defined in: [src/apps/Service.ts:43](https://github.com/tabetalt/pulumix/blob/3f491a9/src/apps/Service.ts#L43)

___

### serviceSecret

• `Optional` **serviceSecret**: [*ServiceSecret*](../classes/iam_servicesecret.servicesecret.md)

GCP Service Account Secret Name

This can be used in combination with iam.ServiceSecret.

Defined in: [src/apps/Service.ts:25](https://github.com/tabetalt/pulumix/blob/3f491a9/src/apps/Service.ts#L25)

___

### version

• `Optional` **version**: *Input*<string\>

Version
default to: process.env.VERSION || dev

Defined in: [src/apps/Service.ts:18](https://github.com/tabetalt/pulumix/blob/3f491a9/src/apps/Service.ts#L18)
