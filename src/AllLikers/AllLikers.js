import { useContext, useEffect, useState } from "react";
import PostContext from "../PostContext";
import LikedBy from "./LikedBy";
import Button from "../Button/Button";
import "./allLikers.css";
export default function AllLikers() {
    const { showAllLikers, setShowAllLikers, people, theme } = useContext(PostContext);
    const [likersC, setLikersC] = useState("hide");
    useEffect(() => {
        if (showAllLikers === true) {
            if (theme === 'light') {
                setLikersC("show_all_likers_light show_all_likers")
            }
            if (theme === 'dark') {
                setLikersC("show_all_likers_dark show_all_likers")
            }
        }
        else if(showAllLikers === false){
            setLikersC("hide")
        }
    }, [theme, showAllLikers])
    return (
        <div className={likersC}>
            <div className="likers_header">
                Liked By:
                <Button
                    btnClass="close"
                    onClick={() => setShowAllLikers(false)} />
            </div>
            <div className="likers_body">
                <LikedBy
                    person={people.angelina} />
                <LikedBy
                    person={people.alice} />
                <LikedBy
                    person={people.bob} />
                <LikedBy
                    person={people.judy} />
                <LikedBy
                    person={people.jennifer} />
                <LikedBy
                    person={people.pop} />
                <LikedBy
                    person={people.tom} />
                <LikedBy
                    person={people.bradley} />
                <LikedBy
                    person={people.jack} />
                <LikedBy
                    person={people.julia} />
                <LikedBy
                    person={people.matthew} />
            </div>
        </div>
    )
}