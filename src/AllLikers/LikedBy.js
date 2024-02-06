import { useContext } from "react";
import PostContext from "../PostContext";
import { ReactComponent as Add } from "../img/svgs/plus.svg";
export default function LikedBy({ person }) {
    const { theme } = useContext(PostContext);
    return (
        <div className={theme === "light" ? "likedBy_light likedBy" : "likedBy_dark likedBy"}>
            <img src={Object.values(person.src).toString()} alt={person.id} /> {person.id}
            <button className="blueBtn">
                Follow
                <Add
                    fill="white"
                    width="10" />
            </button>
        </div>
    )
}