import { Outlet } from "react-router-dom";
import { useContext } from "react";
import PostContext from "../PostContext";
import LeftSidebar from "./Sidebar/LeftSidebar";
import MyOffcanvas from "./MyOffcanvas/MyOffcanvas";
import Main from "./Main";
import "./body.css";
export default function Body() {
    const { selectedBtn } = useContext(PostContext);

    return (
        <div className="body">
            <MyOffcanvas />
            <LeftSidebar />
            {
                selectedBtn === "home" ? <Main /> :
                    <Outlet />
            }
        </div>
    )
}