import * as React from "react";
import { RecoilRoot } from "recoil";
import "./styles.css";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}
