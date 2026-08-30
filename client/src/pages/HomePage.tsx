import { Link } from "react-router";

export function HomePage() {
  return (
    <div>
      <p className="text-2xl font-semibold text-amber-800">Hello World!</p>

      <Link to="/forms/new">New</Link>
      <Link to="/forms/1/fill">Fill 1</Link>
      <Link to="/forms/1/responses">Responses 1</Link>
    </div>
  );
}
