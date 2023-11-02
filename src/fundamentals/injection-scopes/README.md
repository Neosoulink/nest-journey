# Injection scopes

## Notes

t's important to note that NodeJs doesn't follow the request/response multi thread.
It means that, using singleton instance for a NestJs App is perfectly safe!

We have three different kind of scopes for injections

- **DEFAULT**
  The default parameter. A single instance of the provider shared to the whole application.
  See: [AppService](../../app.service.ts?plain=1#L3)
- **REQUEST**
  A new instance will be created for each new request. Those instance will be clear/lost after the request process.
  See: [InjectionScopesService](./injection-scopes.service.ts?plain=1#L6)
- **TRANSIENT**
  A new instance will be created for each consumer who will inject the provider.
  See: [InjectionScopesModule](./injection-scopes.module.ts?plain=1#L14)

> 💡 It's recommended to stay in the **DEFAULT** parameter for caching purposes.
> See the interface definition: [scope-options.interface.ts](https://github.com/nestjs/nest/blob/master/packages/common/interfaces/scope-options.interface.ts)

## Resources

- [Injection-scopes](https://docs.nestjs.com/fundamentals/injection-scopes)
- [scope-options.interface.ts](https://github.com/nestjs/nest/blob/master/packages/common/interfaces/scope-options.interface.ts)
- [Scopes Integration](https://github.com/nestjs/nest/tree/master/integration)
