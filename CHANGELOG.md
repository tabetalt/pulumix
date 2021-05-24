# Changelog

## [2.0.0](https://www.github.com/tabetalt/pulumix/compare/v1.0.2...v2.0.0) (2021-05-24)


### ⚠ BREAKING CHANGES

* **ResourceOptions:** Resources that utilize this resource must move Config argument
* **Service:** Resources that use Config must change API implementation.
* **Provider:** Makes providers easier to handle and configure by only using Config class.
* **Helpers:** Config value changed from `coreDomain` to `primaryDomain`

### Features

* **Ambassador:** Add Mapping resourceGeneric Ambassador Mapping resource ([4f7db1e](https://www.github.com/tabetalt/pulumix/commit/4f7db1e51724f36566a1de5b838eeca4e6fe832f))
* **Apps:** Add Service Resource ([a0bc5a9](https://www.github.com/tabetalt/pulumix/commit/a0bc5a999d0f37aede3e1b0f97062ace9f8ddc8d))
* Docker service ([8608239](https://www.github.com/tabetalt/pulumix/commit/8608239187afc59189bba9fd318d2f6fac56ca53))
* GRPC Service ([eb99b91](https://www.github.com/tabetalt/pulumix/commit/eb99b91385cbc14c3bf9a1ca2b5d8f25b70e89eb))
* **Helpers:** Add Config class ([45c2897](https://www.github.com/tabetalt/pulumix/commit/45c289728e4e048b953619af1629d39a5ddd7554))
* **Provider:** Simplify providers ([b701727](https://www.github.com/tabetalt/pulumix/commit/b701727f9dfd8e4580a75bab37421ed83bdd96a0))
* **Service:** Remove config from CustomResourceOptions ([2c7a4f7](https://www.github.com/tabetalt/pulumix/commit/2c7a4f76806d492d2a7aca9d0bbf1d5b0be4b196))
* ServiceSecret ([87770b8](https://www.github.com/tabetalt/pulumix/commit/87770b8c776b3b754690b87a573712b0bc897a0f))


### Bug Fixes

* **Ambassador:** Fix namespace issue ([f585b46](https://www.github.com/tabetalt/pulumix/commit/f585b4696903e42ea1539e4965b82188805515a3))
* Bump dependencies ([#25](https://www.github.com/tabetalt/pulumix/issues/25)) ([c3434ad](https://www.github.com/tabetalt/pulumix/commit/c3434ad5ac4643f5b2ec4c2c483884e4d53e99c3))
* missing args from super call ([44abe68](https://www.github.com/tabetalt/pulumix/commit/44abe68cd9c6e7b77a75d2bad330d746502e822a))
* Remove redundant Config class ([61f7075](https://www.github.com/tabetalt/pulumix/commit/61f70750a5a14b5dc9621e8f04e5fd9fe907759f))
* Remove registry config ([167b251](https://www.github.com/tabetalt/pulumix/commit/167b2513008034d31b659ea577eecaa676486a1b))
* **Service:** Fix parent reference ([2ad703c](https://www.github.com/tabetalt/pulumix/commit/2ad703cb9f4181a643a84edd7c29077be4b96ada))
* **ServiceSecret:** Add parent ref ([fcf4ddd](https://www.github.com/tabetalt/pulumix/commit/fcf4ddde0d97e47a3172b973eaebddc842c976ec))
* **ServiceSecret:** Fixes references to ServiceSecret ([1a79e23](https://www.github.com/tabetalt/pulumix/commit/1a79e23a9a63c09eee98d039c3ea8c5cb3adcfb0))
* **ServiceSecret:** Typing error ([5e5b6f2](https://www.github.com/tabetalt/pulumix/commit/5e5b6f297aadc3b7de52586079cfc3c74afdffc4))
* Update naming from GCPServiceAccountSecret to serviceSecret ([9e41c8d](https://www.github.com/tabetalt/pulumix/commit/9e41c8d12b531c880ea69adfa3e596f3c5cd584d))
* use provider info for getRegistryImage ([ab88578](https://www.github.com/tabetalt/pulumix/commit/ab885785280deabdafb7046198c4d73a3d7d95c6))


### Code Refactoring

* **ResourceOptions:** Remove redundant ResourceOption ([1b3d8e7](https://www.github.com/tabetalt/pulumix/commit/1b3d8e7ef2ee482c3caffb52deff8d36ea63b29c))
