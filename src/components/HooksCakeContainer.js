import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
function HooksCakeContainer() {
  const numberOfCakes = useSelector((state) => state.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>But Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
