# Circular dependency

Sometimes providers can depends each other, but during the run-time, both providers will not be able to instantiate an other cause the essential meta data won't be available, which will occur an error (a circular dependency).

To solve that error, we can use **forward referencing** or the **ModuleRef**

> 🚧 Circular dependency should be avoided as much as possible!

See how the circular dependency is resolved using **forward referencing**. The provider [CircularDependencyAService](./circular-dependency-a.service.ts?plain=1#L7) depending on [CircularDependencyBService](./circular-dependency-b.service.ts?plain=1#L7) and vice versa.
