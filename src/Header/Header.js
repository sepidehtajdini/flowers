import { useRef, useState, useContext } from "react";
import PostContext from "../PostContext";
import Button from "../Button/Button";
import { ReactComponent as Search } from "../img/svgs/search.svg";
import { ReactComponent as NavBtn } from "../img/svgs/toggle.svg";
import "./header.css";
export default function Header() {
    const inp = useRef();
    const { people, theme, setOffcanvasDisplay, profileShow } = useContext(PostContext);
    const [closeCls, setCloseCls] = useState("hide");
    function search(e) {
        setCloseCls("close");
        if (e.target.value === "") setCloseCls("hide");
        if (e.target.value !== "") {
        }
    }
    return (
        <div className={theme === "light_theme" ? "light header" : "dark header"}>
            <div style={{ display: "flex" }}>
                <NavBtn
                    className="offcanvasToggle"
                    onClick={() => setOffcanvasDisplay(true)} />

                <div className="header_title">Flowers</div>
            </div>
            <div className="searchBar" autoFocus>
                <Search className="search_icon" />
                <input
                    className="searchbar_input"
                    placeholder="Search..."
                    onChange={search}
                    ref={inp} />
                <Button
                    btnClass={closeCls}
                    onClick={() => {
                        inp.current.value = "";
                        setCloseCls("hide")
                    }} />
            </div>
            <div className={profileShow === true ? "header_profile" : "hide"}>
                <Button
                    txt="log out"
                    btnClass="redBtn"
                />
                <img src={people.jennifer.src.jennifer} alt="profile" className="profile_pic" />
            </div>
        </div>
    )
}