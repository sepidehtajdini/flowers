import { useState, useContext } from "react";
import PostContext from "../../PostContext";
import Creator from "./Creator";
import ItemsBar from "./ItemsBar";
import LikesBar from "./LikesBar";
import Caption from "./Caption";
import "./Post.css";
export default function Post(
    { creator, postRef, picSrc, captionRef, src1, src2, lastLiker, txt, time, id }
) {
    const [showMore, setShowMore] = useState(false);
    const { theme } = useContext(PostContext);
    return (
        <div className={theme === "light_theme"
            ? "light post"
            : "dark post"}
            ref={postRef} id={id}>
            <Creator
                creator={creator}
                time={time} />
            <img src={picSrc} className="post_img" alt="flower" loading="lazy" />
            <ItemsBar />
            <LikesBar
                src1={src1}
                src2={src2}
                lastLiker={lastLiker} />
            <Caption
                txt={txt}
                captionRef={captionRef}
                showMore={showMore}
                setShowMore={setShowMore}
                postRef={postRef}
            />
        </div>
    )
}