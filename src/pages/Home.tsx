import { createRoute } from "@kalena/framework";
import { isPublic } from "@permissions/public.ts";
import { BaseLayout } from "@comp/layout/BaseLayout.tsx";

const Home = () => {
  return (
    <BaseLayout title="Home">
      <div>Home</div>
    </BaseLayout>
  );
};

export const homeRoute = createRoute({
  path: "/",
  component: Home,
  permission: {
    check: isPublic,
    redirectPath: "/",
  },
  partial: false,
  hmr: Deno.env.get("ENV") === "local",
});
