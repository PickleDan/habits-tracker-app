import React from "react";
import { Header } from "./header/Header";
import Table from "./Table";
import { Footer } from "../components/footer/Footer";

export const Main = ({ habits, weekDays }) => {
    return (
        <>
            <Header />
            <Table habits={habits} weekDays={weekDays} />
            <Footer />
        </>
    );
};
