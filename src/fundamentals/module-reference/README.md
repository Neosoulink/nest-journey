# Module reference

Nest provides the [`ModuleRef`](https://github.com/nestjs/nest/blob/master/packages/core/injector/module-ref.ts#L25) class importable from `@nest/core` to get the providers internal list and get any providers reference using its injection token.

See the [integration](./module-reference.service.ts#L9)

## Get instances

The class `ModuleRef` instance provides the `get` method which can help to retrieve a reference instance in the current module.

> PS: should be integrated within OnModuleInit method implemented with the interface [`OnModuleInit`](https://github.com/nestjs/nest/blob/master/packages/common/interfaces/hooks/on-init.interface.ts)

See the [integration](./module-reference.module.ts#L14)

## Reference

- [Module reference](https://docs.nestjs.com/fundamentals/module-ref)
- [ModuleRef Class](https://github.com/nestjs/nest/blob/master/packages/core/injector/module-ref.ts#L25)
