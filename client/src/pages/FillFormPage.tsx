import { useParams } from "react-router";

export function FillFormPage() {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <p>FillFormPage</p>
    </div>
  );
}
