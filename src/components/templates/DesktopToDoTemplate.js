import React from "react";
import { Header } from "../organisms/Header/Header";
import { TaskList } from "../organisms/TaskList/TaskList";
import { Footer } from "../organisms/Footer/Footer";
import "./DesktopToDoTemplate.css";

export const DesktopToDoTemplate = () => {
  return (
    <div>
      <div className="ImageBckg"></div>
      <div className="DesktopToDoTemplate">
        <Header />
        <div className="Content">
          <TaskList />
          <Footer />
        </div>
      </div>
    </div>
  );
};
