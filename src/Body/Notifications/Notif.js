import { useContext } from "react";
import PostContext from "../../PostContext";
import Button from "../../Button/Button";

export default function Notif({ person, time, img, noteType, comment, likeCount, flowers}) {
    const { theme } = useContext(PostContext);
    let note;
    if (noteType === "posted") {
        note = 'posted a photo'
    }
    if (noteType === "liked comment") {
        note = "liked your comment:"
    }
    if (noteType === "liked photo") {
        note = `and ${likeCount} others liked your photo`
    }
    if (noteType === "commented") {
        note = "commented on your post:"
    }
    if (noteType === "followed") {
        note = "started following you"
    }
    if (noteType === "requested") {
        note = "requested to follow you"
    }
    return (
        <div className={theme === "light_theme"
            ? "light_div_items div_items"
            : "dark_div_items div_items"}>
            <div className="items_left">
                <div>
                    <img src={Object.values(person.src).toString()} className="creator_img"
                        alt={person.id} />
                </div>
                {person.id} {note}
                {comment ?
                    <div className="ellipsis">{comment}</div>
                    : null
                }
                <div className="msgFont" style={{ marginLeft: 7 + "px" }}>{time}</div>
            </div>
            <div className="items_right">
                {noteType === "requested" ?
                    <div style={{ display: "flex", gap: 5 + "px" }}>
                        <Button
                            btnClass="blueBtn"
                            txt="Accept" />
                        <Button
                            btnClass="redBtn"
                            txt="Decline" />
                    </div>
                    : null}
                {img ?
                    <img
                        src={img}
                        className="notifications_img"
                        alt="flower" />
                    : null
                }
            </div>
        </div>
    )
}