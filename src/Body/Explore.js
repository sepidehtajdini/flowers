import { useContext, useRef, useEffect } from "react";
import PostContext from "../PostContext";
import Post from "./Post/Post";
export default function Explore() {
    const { people, flowers, activePost } = useContext(PostContext);
    const postRef1 = useRef();
    const postRef2 = useRef();
    const postRef3 = useRef();
    const postRef4 = useRef();

    const captionRef1 = useRef();
    const captionRef2 = useRef();
    const captionRef3 = useRef();
    const captionRef4 = useRef();

    useEffect(() => {
        if (activePost === "redTulipa") {
            postRef1.current.scrollIntoView();
        }
        if (activePost === "pinkLilium") {
            postRef2.current.scrollIntoView();
        }
        if (activePost === "blackRose") {
            postRef3.current.scrollIntoView();
        }
        if (activePost === "pinkAlstroemeria") {
            postRef4.current.scrollIntoView();
        }
    }, [activePost])

    return (
        <div className="main">
            <h3>Explore</h3>
                <div className="main_postBar">
                    <Post
                        id={flowers.tulipa.color.red.name}
                        creator={people.selena}
                        postRef={postRef1}
                        captionRef={captionRef1}
                        picSrc={flowers.tulipa.color.red.src.redTulipa}
                        src1={people.bob.src.bob}
                        src2={people.tom.src.tom}
                        lastLiker={people.bradley}
                        time="10min"
                        txt="Beautiful red tulipa!"
                    />
                    <Post
                        id={flowers.lilium.color.pink.name}
                        creator={people.haily}
                        postRef={postRef2}
                        captionRef={captionRef2}
                        picSrc={flowers.lilium.color.pink.src.pinkLilium}
                        src1={people.alice.src.alice}
                        src2={people.judy.src.judy}
                        lastLiker={people.angelina}
                        time="5h"
                        txt="Hey all ! i just took this pic 10 minutes ago !
                        its so beautiful! I love liliums" />
                </div>
            <div className="main_postBar">
                <Post
                    id={flowers.rose.color.black.name}
                    creator={people.justin}
                    postRef={postRef3}
                    captionRef={captionRef3}
                    picSrc={flowers.rose.color.black.src.blackRose}
                    src1={people.bob.src.bob}
                    src2={people.jack.src.jack}
                    lastLiker={people.selena}
                    time="18h"
                    txt="Black roses are amazing!"
                />
                <Post
                    id={flowers.alstroemeria.color.pink.name}
                    creator={people.zac}
                    postRef={postRef4}
                    captionRef={captionRef4}
                    picSrc={flowers.alstroemeria.color.pink.src.pinkAlstroemeria}
                    src1={people.judy.src.judy}
                    src2={people.justin.src.justin}
                    lastLiker={people.enrique}
                    time="1d"
                    txt="Alstroemeria is beautiful.. specially the pink one :)" />
            </div>
        </div>
    )
}