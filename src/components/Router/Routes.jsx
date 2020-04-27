import { Route, BrowserRouter as Router } from 'react-router-dom'
import React from 'react';
import AuthContainer from "../Auth/AuthContainer";
import {Main} from "../Main";
import {DateUtils} from "../../utils/date";
import moment from "moment";
import { HABITS } from "../../models/mocks/habit";

const Routes = () => {
    const weekDays = DateUtils.getWeekDays(moment());
    return (
        <Router>
            <Route path="/auth"> <AuthContainer/> </Route>
            <Route path="/main"> <Main habits={HABITS} weekDays={weekDays} />   </Route>
         </Router>
    );
};

export default Routes;
