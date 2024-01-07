# Testing

NestJs provides a useful solution to manage _Uint-tests_, _e2e-tests_, and _Integration-tests_.
Besides, NestJS supports many testing libraries, but here, we will `Jest`.

## Unit testing

[See the example](./app.controller.spec.ts#L45)

## Auto mocking

[See the example](./app.controller.spec.ts#L53)

## End to end

To provide realistic tests, a bit like the interaction with end-users, it's important to perform _e2e_ tests.

> The use of [supertest](https://github.com/visionmedia/supertest) is highly recommended to simulate HTTP requests.

[See the example](../test/app-alternative.e2e-spec.ts)
