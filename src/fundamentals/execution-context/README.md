# Execution context

NestJs provide a bunch of class utils that can help to works with generic context applications (working with multiple context application. server-based, microservices, websocket).

Here's two such classes:

## ArgumentHost

`ArgumentHost` provide a bunch of methods for retrieving the argument being passed as to the handler.
Generally set as `host` parameter, it's allows us choosing the appropriate context.

See the integration [here](./execution-context.filter.ts#L11)

## ExecutionContext

`ExecutionContext` Extends from [`ArgumentHost`](#argumenthost) and provided additional details about the current context.

See the integration [here](./execution-context.guard.ts#L7)
