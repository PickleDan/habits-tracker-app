import React from "react";
import { Header } from "./Header/Header";
import MainTable from "./Table";
import { Footer } from "./Footer/Footer";

export const Main = ({ habits, weekDays }) => {
    return (
        <>
            <Header />
            <MainTable habits={habits} weekDays={weekDays} />
            <Footer />
        </>
    );
};
