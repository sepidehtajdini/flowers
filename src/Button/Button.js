import "./button.css";
export default function Button({btnClass, txt, onClick}) {
    return (
            <button className={btnClass} onClick={onClick}>
                {txt}
            </button>
    )
}