"use client";
import React from "react";
import { Btn1 } from "./style";

type Props = {
  children: string;
};

export default function Button1({ children }: Props) {
  return <Btn1>{children}</Btn1>;
}
