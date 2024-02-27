import { useContext } from "react"
import PostContext from "../../PostContext";
import Notif from "./Notif";
import "./notifications.css";
export default function Notifications() {
    const { flowers, people } = useContext(PostContext);
    return (
        <div className="main">
            <h3>Notifications</h3>
            <Notif
                person={people.bradley}
                time="20min"
                img={flowers.orchid.color.pink.src.pinkOrchid}
                noteType="posted" />
            <Notif
                person={people.tom}
                time="1hr"
                img={flowers.lilium.color.white.src.whiteLilium}
                noteType="posted" />
            <Notif
                person={people.pop}
                time="2d"
                img={flowers.rose.color.red.src.redRose}
                noteType="posted" />
            <Notif
                person={people.tom}
                time="2d"
                noteType="requested" />
            <Notif
                person={people.jack}
                time="2d"
                img={flowers.anthurium.color.red.src.redAnthurium}
                noteType="liked comment"
                comment="Intresting photo jack!" />
            <Notif
                person={people.jack}
                time="2d"
                img={flowers.anthurium.color.red.src.redAnthurium}
                noteType="posted" />
            <Notif
                person={people.julia}
                time="2w"
                noteType="followed" />
            <Notif
                person={people.bob}
                time="3w"
                noteType="followed" />
            <Notif
                person={people.pop}
                img={flowers.tulipa.color.pink.src.pinkTulipa}
                time="4w"
                noteType="commented"
                comment="Very beautiful jeni" />
            <Notif
                person={people.matthew}
                img={flowers.tulipa.color.pink.src.pinkTulipa}
                time="2w"
                noteType="liked photo"
                likeCount="1,839" />
        </div>
    )
}