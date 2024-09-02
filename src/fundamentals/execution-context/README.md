# Execution context

NestJs provides a bunch of class utils that can help to work with generic context applications (working with multiple context applications. server-based, microservices, WebSocket).

## ArgumentHost

`ArgumentHost` provides a bunch of methods for retrieving the argument being passed to the handler.
Generally set as a `host` parameter, it allows us to choose the appropriate context.

See the integration [here](./execution-context.filter.ts#L11)

## ExecutionContext

`ExecutionContext` Extends from `ArgumentHost` and provides additional details about the current context.

See the integration [here](./execution-context.guard.ts#L7)

## Reflection and MetaData

NestJS provides a way to attach additional metadata to route handlers through **decorators** using `Reflector#createDecorator` or `SetMetaData`

See the integration into the [Guard](./execution-context.guard.ts#L12), the [decorator](./execution-context.decorator.ts) definition and the controller [implementation](./execution-context.controller.ts#L7)
