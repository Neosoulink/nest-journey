# Circular dependency

Sometimes providers or modules can depends on each others, but during the run-time, both dependencies will not be able to instantiate an other cause the essential meta data won't be available, which will occur an error (a circular dependency error).

To solve that error, we can use **forward referencing** or the **ModuleRef**

> 🚧 Circular dependency should be avoided as much as possible!

See how the circular dependency is resolved using **forward referencing**. The provider [CircularDependencyAService](./circular-dependency-a.service.ts?#L7) depending on [CircularDependencyBService](./circular-dependency-b.service.ts?#L7) and vice versa.

Same for modules, see how circular dependency is resolved for [CircularDependencyModule](./circular-dependency.module.ts?#L5) and [CircularDependencyBModule](./circular-dependency-b.module.ts?#L5)
