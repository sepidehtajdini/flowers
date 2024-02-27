import { useContext, useEffect, useState } from "react";
import PostContext from "../../PostContext";
import { ReactComponent as Like } from "../../img/svgs/filled-heart.svg";
import { ReactComponent as Dislike } from "../../img/svgs/empty-heart.svg";
import { ReactComponent as Comment } from "../../img/svgs/comment.svg";
import { ReactComponent as Share } from "../../img/svgs/share-alt.svg";
import { ReactComponent as NotSave } from "../../img/svgs/bookmark-empty.svg";
import { ReactComponent as Save } from "../../img/svgs/bookmark-filled.svg";
export default function ItemsBar() {
    const { theme } = useContext(PostContext);
    const [likeC, setLikeC] = useState("hide");
    const [saveC, setSaveC] = useState("hide");
    const [notLikeC, setNotLikeC] = useState("light_items");
    const [notSaveC, setNotSaveC] = useState("light_items");

    function likePost() {
        setNotLikeC("hide");
        setLikeC("light_items");
    }
    function dislikePost() {
        setLikeC("hide");
        if (theme === "light_theme") {
            setNotLikeC("light_items");
        }
        else {
            setNotLikeC("dark_items")
        }
    }
    function notSave() {
        setSaveC("hide");
        if (theme === "light_theme") {
            setNotSaveC("light_items");
        }
        else {
            setNotSaveC("dark_items")
        }
    }
    function save() {
        setNotSaveC("hide");
        setSaveC("light_items");
    }
    useEffect(() => {
        if (theme === "dark_theme") {
            setNotLikeC("dark_items");
            setNotSaveC("dark_items");
        }
    }, [theme])
    return (
        <div className="post_items_bar">
            <div style={{ display: "flex", gap: 10 + 'px' }}>
                <Dislike className={notLikeC} onClick={likePost} />
                <Like className={likeC} fill="var(--bs-red)" onClick={dislikePost} />
                <Comment className={theme === "light_theme" ? "light_items" : "dark_items"} />
                <Share className={theme === "light_theme" ? "light_items" : "dark_items"} />
            </div>
            <div>
                <NotSave className={notSaveC} onClick={save} />
                <Save className={saveC} fill="var(--bs-blue)" onClick={notSave} />
            </div>
        </div>
    )
}