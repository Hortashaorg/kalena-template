import { app } from "@kalena/framework";

const myApp = app({
  routes: [],
  port: 4000,
});

Deno.serve({
  port: 4000,
  hostname: "127.0.0.1",
}, myApp.fetch);
