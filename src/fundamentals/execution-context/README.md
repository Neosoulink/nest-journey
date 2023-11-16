# Execution context

NestJs provide a bunch of class utils that can help to works with generic context applications (working with multiple context application. server-based, microservices, websocket).

Here's two such classes:

- ArgumentHost:
  Provided bunch of method for retrieving the argument being passed as to the handler.
  Generally set as `host` parameter, it's allows us choosing the appropriate context.

  See the integration [here](./execution-context.filter.ts#L11)
  </br>

- ExecutionContext:
