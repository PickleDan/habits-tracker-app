import React from "react";
import "./scss/App.scss";
import Table from "./components/Table";
import { HABITS } from "./models/mocks/habit";
import { DateUtils } from "./utils/date";
import moment from "moment";

function App() {
    const weekDays = DateUtils.getWeekDays(moment());
    return <Table habits={HABITS} weekDays={weekDays} />;
}

export default App;
