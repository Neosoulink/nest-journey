# Basics

## Controller

In Rest applications, the most important thing is to provide an entry point/route to provide to the end user.

In Nest, a route is represented by a controller. see the [example](./basics.controller.ts#L7).

To precise a main route of the controller, let's assume `app/`, we have to pass a string to the `@Controller`decorator \_(imported from`@nesjs/common`)\_
E.g:

```ts
import { Controller } from '@nestjs/common';

@Controller('app')
export class BasicsController
```

Thus, to access the routes from `BasicController` we'll enter: **<http://hostname/app>**

## Providers

