import { useSelector, useDispatch } from "react-redux";
const ComponentOne = () => {
  const data = useSelector((state) => state.someData);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{data}</p>
      <button onClick={() => dispatch(actionOne)}>Change data</button>
    </div>
  );
};
export default ComponentOne;
