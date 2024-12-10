import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import type { Route } from "./+types/home";

import { Button } from "../components/Button";
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
      <h1>useInputValue</h1>
      <em>Hook for managing form input state and validation.</em>
      <p>
        The hook attaches itself to an <code>HTMLInputElement</code>’s value and
        validates it on
        <code> onBlur</code> event using a provided validator function. If the
        criteria are met, it returns
        <code> null</code>; otherwise, it provides an error message.
      </p>

      <p>{loaderData.message}</p>
      <CodeSnippet />
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
