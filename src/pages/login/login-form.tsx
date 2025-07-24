import { useForm } from "react-hook-form";
import Button from "@/components/ui/button";
import FormInput from "@/components/form/form-input";

type T = { username: string; password: string };

const LoginForm: React.FC = () => {
  const { control, handleSubmit } = useForm<T>();

  function handleLogin(values: T) {
    console.log(values);
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        className="p-4 flex flex-col gap-2 max-w-md w-full"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h1 className="text-3xl text-center">Login</h1>

        <FormInput
          control={control}
          name="username"
          label="Username"
          required
        />
        <FormInput
          control={control}
          name="password"
          label="Password"
          required
        />

        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default LoginForm;
