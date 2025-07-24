import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { getToken } from "@/utils/auth";
import DefaultLayout from "@/components/layout/default";

export const Route = createFileRoute("/_main")({
  component: RouteComponent,
  beforeLoad: () => {
    const token = getToken();
    if (!token) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function RouteComponent() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}
