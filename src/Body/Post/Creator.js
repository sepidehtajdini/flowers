import { useContext } from "react";
import { ReactComponent as Ellipsis } from "../../img/svgs/ellipsis-h.svg";
import PostContext from "../../PostContext";
export default function Creator({ creator, time }) {
    const { theme } = useContext(PostContext);
    return (
        <div className="post_creator">
            <div style={{ display: "flex", gap: 5 + "px" }}>
                <img src={Object.values(creator.src).toString()} className="creator_profile" alt={creator.id} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>{creator.id}</span>
                    <span className="username">{time}</span>
                </div>
            </div>
            <Ellipsis className={theme === "light" ? "light_items" : "dark_items"} />
        </div>
    )
}