import React from "react";

import { Meta } from "@storybook/react";

import Button1 from "./index";

export default {
  title: "Button-テスト",
  component: Button1,
} as Meta<typeof Button1>;

export const Default1 = () => <Button1>Click me</Button1>;

export const Default2 = () => <Button1>Click me</Button1>;

export const Default3 = () => <Button1>Click me</Button1>;
