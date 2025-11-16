"use client";

import { RootState } from "@/share/lib/store";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Component = styled.div`
  font-size: 18px;
  color: red;
`;

export default function TestComponent() {
  const value = useSelector((state: RootState) => state.counter.value);

  return <Component>테스트 {value}</Component>;
}
