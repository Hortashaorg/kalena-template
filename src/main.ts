import { app } from "@kalena/framework";
import * as routes from "@routes/Home.tsx";

const myApp = app({
  routes: [
    ...Object.values(routes),
  ],
});

Deno.serve({
  port: 4000,
  hostname: "0.0.0.0",
}, myApp.fetch);
