import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { increment, decrement } from "./testReducer";
import { openModal } from "../../app/common/modals/modalReducer";
import TestPlaceInput from "./TestPlaceInput";

const SnadBox = () => {
  const dispatch = useDispatch();
  const [target, setTarget] = useState();
  const data = useSelector((state) => state.test.data);
  const { loading } = useSelector((state) => state.async);
  console.log(loading);
  return (
    <>
      <h1>Testing 123</h1>
      <h1>The data is:{data}</h1>
      <Button
        name="increment"
        loading={loading && target === 'increment'}
        onClick={(e) => {
          dispatch(increment(10));
          setTarget(e.target.name);
        }}
        content="Increment"
        color="green"
      />
      <Button
        name="decrement"
        loading={loading && target ==='decrement'}
        onClick={(e) => {
          dispatch(decrement(10));
          setTarget(e.target.name);
        }}
        content="Decrement"
        color="red"
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
        content="open Modal"
        color="teal"
      />

      <div style={{ marginTop: 15 }}>
        <TestPlaceInput />
      </div>
    </>
  );
};

export default SnadBox;
