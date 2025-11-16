"use client";

import { increment } from "@/share/lib/features/counter/counterSlice";
import { AppDispatch } from "@/share/lib/store";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Component = styled.div`
  font-size: 18px;
  color: red;
`;

export default function TestComponent2() {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <Component>
      <button onClick={handleClick}>증가</button>
    </Component>
  );
}
