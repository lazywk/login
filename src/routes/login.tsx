import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "@/pages/login/login-form";

export const Route = createFileRoute("/login")({
  component: LoginForm,
});
