import React from "react";
import { Header } from "./header/Header";
import MainTable from "./Table";
import { Footer } from "../components/footer/Footer";

export const Main = ({ habits, weekDays }) => {
    return (
        <>
            <Header />
            <MainTable habits={habits} weekDays={weekDays} />
            <Footer />
        </>
    );
};
