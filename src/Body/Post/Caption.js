import { useEffect, useState } from "react";
import Button from "../../Button/Button";
export default function Caption({ txt, captionRef, showMore, setShowMore, postRef }) {
    useEffect(() => {
        if (captionRef.current.clientHeight < captionRef.current.scrollHeight) {
            setShowMore(true)
        }
        else {
            setShowMore(false)
        }
    })

    const [showC, setShowC] = useState(false);
    return (
        <>
            <div
                className={showC ? "overflow_show" : "post_caption"}
                ref={captionRef}>
                {txt}
            </div>
            <Button
                btnClass={showMore ? "showMore" : "hide"}
                txt="show more"
                onClick={() => {
                    setShowC(true); postRef.current.style.height = "fit-content";
                    console.log(postRef.height)
                }}
            />
        </>
    )
}
