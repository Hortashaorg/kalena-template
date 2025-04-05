import { createRoute } from "@kalena/framework";
import { isPublic } from "@permissions/public.ts";
import { BaseLayout } from "@comp/molecules/layout/BaseLayout.tsx";
import { Text } from "@comp/atoms/typography/Text.tsx";

const Home = () => {
  return (
    <BaseLayout title="Home">
      <Text>Home</Text>
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
