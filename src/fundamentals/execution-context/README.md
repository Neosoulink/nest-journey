# Execution context

NestJs provide a bunch of class utils that can help to works with generic context applications (working with multiple context application. server-based, microservices, websocket).

## ArgumentHost

`ArgumentHost` provide a bunch of methods for retrieving the argument being passed as to the handler.
Generally set as `host` parameter, it's allows us choosing the appropriate context.

See the integration [here](./execution-context.filter.ts#L11)

## ExecutionContext

`ExecutionContext` Extends from [`ArgumentHost`](#argumenthost) and provided additional details about the current context.

See the integration [here](./execution-context.guard.ts#L7)

## Reflection and MetaData

NestJS provide a way to attach additional metadata to route handlers through **decorators** using `Reflector#createDecorator` or `SetMetaData`

See the integration into the [Guard](./execution-context.guard.ts#L12), the [decorator](./execution-context.decorator.ts) definition and the controller [implementation](./execution-context.controller.ts#L7)
