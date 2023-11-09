# Module reference

Nest provides the [`ModuleRef`](https://github.com/nestjs/nest/blob/master/packages/core/injector/module-ref.ts#L25) class importable from `@nest/core` to get the providers internal list and get any providers reference using its injection token.

See the [integration](./module-reference.service.ts)

## Get instances

The class `ModuleRef` instance provides the `get` method which can help to retrieve a reference instance in the current module.

> PS: should be integrated within OnModuleInit method implemented with the interface [`OnModuleInit`](https://github.com/nestjs/nest/blob/master/packages/common/interfaces/hooks/on-init.interface.ts)

See the [integration](./module-reference.service.ts#L16)

## Resolve scoped providers

In case of scoped provider, the `ModuleRef` provider the `resolve` method that return a unique instance of the provider

See the [integration](./module-reference.service.ts#L17)

> **🚧 Important:** The `resolve` method generate a unique instance from its own DI container sub tree. To get read of this, we've to create a context identifier that will keep the same context:
>
> ```typescript
> // Inside the async method `onModuleInit`
> const contextId = new ContextIdFactory.create();
> const moduleRefCService = Promise.all([
>   await this.moduleRef.resolve(ModuleReferenceCService),
>   await this.moduleRef.resolve(ModuleReferenceCService),
> ]);
> console.log(moduleRefCService[0] === moduleRefCService[1]); // true
> ```

## Reference

- [Module reference](https://docs.nestjs.com/fundamentals/module-ref)
- [ModuleRef Class](https://github.com/nestjs/nest/blob/master/packages/core/injector/module-ref.ts#L25)
