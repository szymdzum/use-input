import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import type { Route } from "./+types/home";

import { Button } from "../components/Button";
import { TextInput } from "~/ui/TextInput";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "useInputValueHook" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.SERVER_VALUE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <p>{loaderData.message}</p>
      <CodeSnippet />
      <TextInput
        name="username"
        label="Username"
        validator={(value: string) => value.length < 3 ? "Username too short" : null}
        description="Must be at least 3 characters long"
        placeholder="Enter username"
      />
    </div>
  );
}

const CodeSnippet = () => {
  const scope = { Button };
  const code = `<Button>Hello Button</Button>`;

  return (
    <div className="rounded-lg my-5 shadow-md">
      <LiveProvider code={code} scope={scope}>
        <LiveEditor />
        <LiveError />
        <div className="rounded-md bg-gray-800 p-3 mt-2">
          <LivePreview />
        </div>
      </LiveProvider>
    </div>
  );
};
