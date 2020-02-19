import React from "react";
import "./App.scss";
import Table from "./components/Table";
import { HABITS } from "./models/mocks/habit";

function App() {
  return <Table HABITS={HABITS} />;
}

export default App;
