import { useContext } from "react";
import PostContext from "../../PostContext";
import Msg from "./Msg";
import "./messages.css";
export default function Messages() {
    const { people } = useContext(PostContext);
    return (
        <div className="main">
            <h3>Messages</h3>
            <Msg
                person={people.tom}
                msg="What about this weekend?"
                time="2d"
                countNotSeen='2' />
            <Msg
                person={people.pop}
                msg="God bless you"
                time="1w" />
            <Msg
                person={people.angelina}
                msg="Seen" />
            <Msg
                person={people.alice}
                msg="ok:)))"
                time="2w"
                countNotSeen="5" />
                <Msg
                person={people.judy}
                msg="Yesss... LOL"
                time="4w" />
                <Msg
                person={people.bob}
                msg="Seen"
                time="4w" />
        </div>
    )
}