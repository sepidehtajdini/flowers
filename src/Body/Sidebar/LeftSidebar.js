import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PostContext from "../../PostContext";
import { ReactComponent as HomeSvg } from "../../img/svgs/home.svg";
import { ReactComponent as SaveSvg } from "../../img/svgs/bookmark-filled.svg";
import { ReactComponent as ExploreSvg } from "../../img/svgs/compass.svg";
import { ReactComponent as NotifSvg } from "../../img/svgs/bell.svg";
import { ReactComponent as MessageSvg } from "../../img/svgs/envelope.svg";
import { ReactComponent as SettingSvg } from "../../img/svgs/cog.svg";
import { ReactComponent as ThemeSvg } from "../../img/svgs/palette.svg";
import "./sidebar.css";
export default function LeftSidebar() {
    const navigate = useNavigate();
    const { selectedBtn, setSelectedBtn, people, theme } = useContext(PostContext);
    return (
        <div className={theme + " leftSidebar"}>
            <div className={theme === "light_theme"
                ? "light_leftSidebar leftSidebar_profile"
                : "dark_leftSidebar leftSidebar_profile"}>
                <div className="leftSidebar_profile_pic">
                    <img src={people.jennifer.src.jennifer} className="profile_pic" alt="profile" />
                </div>
                <div className="leftSidebar_profile_txt ">
                    Jennifer Aniston
                    <div className="username">jen.a50</div>
                </div>
            </div>
            <div className={theme === "light_theme"
                ? "light_leftSidebar leftSidebar_menu"
                : "dark_leftSidebar leftSidebar_menu"}>
                <div
                    className={selectedBtn === "home"
                        ? "active_menu_item leftSidebar_menu_items"
                        : "leftSidebar_menu_items"}
                    onClick={() => { setSelectedBtn("home"); navigate("home") }}>
                    <HomeSvg className="sidebarIcon" fill="currentColor" />
                    Home
                </div>
                <div
                    className={selectedBtn === "notifications"
                        ? "active_menu_item leftSidebar_menu_items"
                        : "leftSidebar_menu_items"}
                    onClick={() => { setSelectedBtn("notifications"); navigate("notifications") }}>
                    <NotifSvg className="sidebarIcon" fill="currentColor" />
                    Notifications
                </div>
                <div
                    className={selectedBtn === "explore"
                        ? "active_menu_item leftSidebar_menu_items"
                        : "leftSidebar_menu_items"}
                    onClick={() => { setSelectedBtn("explore"); navigate("explore") }} >
                    <ExploreSvg className="sidebarIcon" fill="currentColor" />
                    Explore
                </div>
                <div
                    className={selectedBtn === "saved"
                        ? "active_menu_item leftSidebar_menu_items"
                        : "leftSidebar_menu_items"}
                    onClick={() => { setSelectedBtn("saved"); navigate("saved") }}>
                    <SaveSvg className="sidebarIcon" fill="currentColor" />
                    Saved
                </div>
                <div
                    className={selectedBtn === "theme"
                        ? "active_menu_item leftSidebar_menu_items"
                        : "leftSidebar_menu_items"}
                    onClick={() => { setSelectedBtn("theme"); navigate("theme") }}>
                    <ThemeSvg className="sidebarIcon" fill="currentColor" />
                    Theme
                </div>
                <div
                    className={selectedBtn === "messages"
                        ? "active_menu_item leftSidebar_menu_items"
                        : "leftSidebar_menu_items"}
                    onClick={() => { setSelectedBtn("messages"); navigate("messages") }}>
                    <MessageSvg className="sidebarIcon" fill="currentColor" />
                    Messages
                </div>
                <div
                    className={selectedBtn === "settings"
                        ? "active_menu_item leftSidebar_menu_items"
                        : "leftSidebar_menu_items"}
                    onClick={() => { setSelectedBtn("settings"); navigate("settings") }}>
                    <SettingSvg className="sidebarIcon" fill="currentColor" />
                    Settings
                </div>
            </div>
        </div>
    )
}