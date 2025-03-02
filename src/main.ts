import { app } from "@kalena/framework";
import { homeRoute } from "@pages/Home.tsx";

const myApp = app({
  routes: [
    homeRoute,
  ],
});

Deno.serve({
  port: 4000,
  hostname: "127.0.0.1",
}, myApp.fetch);
