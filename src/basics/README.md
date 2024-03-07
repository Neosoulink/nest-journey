# Basics

## Controller

"Controllers are responsible for holding incoming requests and returning responses to the client"

In Rest applications, the most important thing is to provide an entry point/route to return to the end user.

A route is represented by a controller. see the [example](./basics.controller.ts#L7).

To set a main route of the controller, let's say `app/`, we have to pass a string to the `@Controller` decorator (imported from `@nesjs/common`)
E.g:

```ts
import { Controller } from '@nestjs/common';

@Controller('app')
export class BasicsController
```

Thus, to access the routes from `BasicController` we'll enter: **<http://hostname/app>**

To easily generate a new controller we use the Nest CLI:

```bash
nest g c <controller-name>
```

## Providers

"The main idea of a provider is that it can be injected as a dependency"

Providers are just simple classes that are declared as providers in a module. See the [example](./basics.module.ts#L32).

### Services

A service is more like a controller manager, it can provide the controller a way to retrieve, store, and resolve data.

See the [service provider example](./basics.service.ts#L18).
