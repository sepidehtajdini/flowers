import { useContext } from "react";
import PostContext from "../../PostContext";
import { ReactComponent as Camera } from "../../img/svgs/camera.svg";
export default function Msg({ person, msg, time, countNotSeen }) {
    const { theme } = useContext(PostContext);
    return (
        <div className={theme === "light_theme"
            ? "light_div_items div_items"
            : "dark_div_items div_items"}>
            <div className="items_left ">
                <div>
                    <img src={Object.values(person.src).toString()} className="creator_img"
                        alt={person.id} />
                </div>
                <div>
                    {person.id}
                    <div className="msgFont">
                        <span className={countNotSeen ? "notSeen_msg" : "msgFont"}>{msg}</span>
                        {countNotSeen ? <div className="notSeen notSeen_count">{countNotSeen}</div> : null}
                        <span>{time}</span>
                    </div>
                </div>
            </div>
            <div className="items_right">
                {countNotSeen ? <div className="notSeen notSeen_bullet" /> : null}
                <Camera className="cameraIcon" />
            </div>
        </div>
    )
}