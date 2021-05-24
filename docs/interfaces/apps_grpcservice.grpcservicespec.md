[@tabetalt/pulumix](../README.md) / [apps/GRPCService](../modules/apps_grpcservice.md) / GRPCServiceSpec

# Interface: GRPCServiceSpec

[apps/GRPCService](../modules/apps_grpcservice.md).GRPCServiceSpec

## Table of contents

### Properties

- [domain](apps_grpcservice.grpcservicespec.md#domain)
- [env](apps_grpcservice.grpcservicespec.md#env)
- [image](apps_grpcservice.grpcservicespec.md#image)
- [mapping](apps_grpcservice.grpcservicespec.md#mapping)
- [namespace](apps_grpcservice.grpcservicespec.md#namespace)
- [ports](apps_grpcservice.grpcservicespec.md#ports)
- [serviceSecret](apps_grpcservice.grpcservicespec.md#servicesecret)
- [version](apps_grpcservice.grpcservicespec.md#version)

## Properties

### domain

• `Optional` **domain**: *Input*<string\>

Domain
defaults to: <name>.<mayor-version>.<default-domain>

Defined in: [src/apps/GRPCService.ts:27](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/GRPCService.ts#L27)

___

### env

• `Optional` **env**: EnvMap

Environment variables

Defined in: [src/apps/GRPCService.ts:10](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/GRPCService.ts#L10)

___

### image

• **image**: *Input*<string\>

Docker image name.
More info: https://kubernetes.io/docs/concepts/containers/images

Defined in: [src/apps/GRPCService.ts:40](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/GRPCService.ts#L40)

___

### mapping

• `Optional` **mapping**: [*MappingSpec*](ambassador_mapping.mappingspec.md)

Mapping Resource
defaults to:
 - serviceName: <name>-service
 - host: <domain>
 - bypassAuth: false
 - servicePort: <port>

Defined in: [src/apps/GRPCService.ts:55](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/GRPCService.ts#L55)

___

### namespace

• `Optional` **namespace**: *Input*<string\>

Namespace

Defined in: [src/apps/GRPCService.ts:15](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/GRPCService.ts#L15)

___

### ports

• **ports**: *undefined* \| *Input*<Input<ContainerPort\>[] \| PortMap\>

Ports

Defined in: [src/apps/GRPCService.ts:45](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/GRPCService.ts#L45)

___

### serviceSecret

• `Optional` **serviceSecret**: [*ServiceSecret*](../classes/iam_servicesecret.servicesecret.md)

GCP Service Account Secret Name

This can be used in combination with iam.ServiceSecret.

Defined in: [src/apps/GRPCService.ts:34](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/GRPCService.ts#L34)

___

### version

• `Optional` **version**: *Input*<string\>

Version
default to: process.env.VERSION || dev

Defined in: [src/apps/GRPCService.ts:21](https://github.com/tabetalt/pulumix/blob/996dcb8/src/apps/GRPCService.ts#L21)
