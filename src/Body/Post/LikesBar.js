import { useContext } from "react"
import PostContext from "../../PostContext"
export default function LikesBar({ src1, src2, lastLiker }) {
    const {setShowAllLikers } = useContext(PostContext);
    function showLikers() {
        setShowAllLikers(true)
    }
    return (
        <div className="post_likes_bar">
            <div style={{ display: "flex" }}>
                <img
                    className="liker_pic first"
                    src={src1}
                    alt="liker person" />
                <img
                    className="liker_pic second"
                    src={src2}
                    alt="liker person" />
                <img
                    className="liker_pic third"
                    src={Object.values(lastLiker.src).toString()}
                    alt="liker person" />
            </div>
            <div className="likes_bar_count" onClick={showLikers}>
                liked by <span>{lastLiker.id}</span> and <span> 1,839</span> others
            </div>
        </div>
    )
}