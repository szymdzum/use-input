import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Inputs | Your App Name" },
    { name: "description", content: "Input components showcase" },
  ];
};

export default function Inputs() {
  return (
    <div className="container">
      <h1>Inputs</h1>
      <p>This page will showcase various input components.</p>

      {/* Input components will be added here */}
    </div>
  );
}
