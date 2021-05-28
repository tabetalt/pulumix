[@tabetalt/pulumix](../README.md) / [apps/DockerService](../modules/apps_dockerservice.md) / DockerServiceSpec

# Interface: DockerServiceSpec

[apps/DockerService](../modules/apps_dockerservice.md).DockerServiceSpec

## Hierarchy

- *Omit*<[*ServiceSpec*](apps_service.servicespec.md), ``"image"``\>

  ↳ **DockerServiceSpec**

## Table of contents

### Properties

- [build](apps_dockerservice.dockerservicespec.md#build)
- [domain](apps_dockerservice.dockerservicespec.md#domain)
- [env](apps_dockerservice.dockerservicespec.md#env)
- [mapping](apps_dockerservice.dockerservicespec.md#mapping)
- [port](apps_dockerservice.dockerservicespec.md#port)
- [serviceSecret](apps_dockerservice.dockerservicespec.md#servicesecret)
- [version](apps_dockerservice.dockerservicespec.md#version)

## Properties

### build

• **build**: *Input*<string \| DockerBuild\>

Reference to Dockerfile

Defined in: [src/apps/DockerService.ts:11](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/DockerService.ts#L11)

___

### domain

• `Optional` **domain**: *Input*<string\>

Domain
defaults to: <name>.<mayor-version>.<default-domain>

Inherited from: Omit.domain

Defined in: [src/apps/Service.ts:31](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/Service.ts#L31)

___

### env

• `Optional` **env**: EnvMap

Environment variables

Inherited from: Omit.env

Defined in: [src/apps/Service.ts:12](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/Service.ts#L12)

___

### mapping

• `Optional` **mapping**: [*MappingSpec*](ambassador_mapping.mappingspec.md)

Mapping Resource
defaults to:
 - serviceName: <name>-service
 - host: <domain>
 - bypassAuth: false
 - servicePort: <port>

Inherited from: Omit.mapping

Defined in: [src/apps/Service.ts:53](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/Service.ts#L53)

___

### port

• `Optional` **port**: *Input*<number\>

Port
defaults to: 8080

Inherited from: Omit.port

Defined in: [src/apps/Service.ts:43](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/Service.ts#L43)

___

### serviceSecret

• `Optional` **serviceSecret**: [*ServiceSecret*](../classes/iam_servicesecret.servicesecret.md)

GCP Service Account Secret Name

This can be used in combination with iam.ServiceSecret.

Inherited from: Omit.serviceSecret

Defined in: [src/apps/Service.ts:25](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/Service.ts#L25)

___

### version

• **version**: *string*

Version

Overrides: Omit.version

Defined in: [src/apps/DockerService.ts:15](https://github.com/tabetalt/pulumix/blob/015837c/src/apps/DockerService.ts#L15)
