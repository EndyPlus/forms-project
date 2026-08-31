import { Link } from "react-router";
import { useAppDispatch, useAppSelector } from "../logic/hooks/useRedux";
import { decrement, increment } from "../logic/store/slices/testSlice";
import { useGetTestByNameQuery } from "../services/testApi";
import { useGetFormsQuery } from "../services/generatedFormsApi";

export function HomePage() {
  const count = useAppSelector((state) => state.test.value);
  const dispatch = useAppDispatch();

  // const { data, error, isLoading } = useGetTestByNameQuery("pikachu");

  // console.log(isLoading);
  // console.log(error);
  // console.log(data);

  const { data } = useGetFormsQuery();

  console.log(data);

  return (
    <div>
      <Link to="/forms/new" className="text-2xl font-semibold text-amber-800">
        New
      </Link>

      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <ul className="mt-4">
        <li>
          <Link to="/forms/1/fill">Fill 1</Link>
          <Link to="/forms/1/responses">Responses 1</Link>
        </li>
        <li>
          <Link to="/forms/2/fill">Fill 2</Link>
          <Link to="/forms/2/responses">Responses 2</Link>
        </li>
      </ul>
    </div>
  );
}
