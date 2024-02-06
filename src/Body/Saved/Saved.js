import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PostContext from "../../PostContext";
import "./saved.css";
export default function Saved() {
    const { flowers, setActivePost, setSelectedBtn } = useContext(PostContext);
    const navigate = useNavigate();
    return (
        <div className="main">
            <h3>Saved posts</h3>
            <div className="first_div">
                <div className="saved_row">
                    <div className="saved_category">
                        <h5>Roses</h5>
                        <div className="category_row">
                            <div
                                className="category_item"
                                onClick={() => {
                                    setSelectedBtn("home");
                                    navigate(`/home`);
                                    setActivePost(`${flowers.rose.color.red.name}`);
                                }} >
                                Red
                                <img src={flowers.rose.color.red.src.redRose}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                            <div className="category_item">
                                White
                                <img src={flowers.rose.color.white.src.whiteRose}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                        </div>
                        <div className="category_row">

                            <div
                                className="category_item"
                                onClick={() => {
                                    setSelectedBtn("explore");
                                    navigate(`/explore`);
                                    setActivePost(`${flowers.rose.color.black.name}`);
                                }} >
                                Black
                                <img src={flowers.rose.color.black.src.blackRose}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                            <div className="category_item">
                                Pink
                                <img src={flowers.rose.color.pink.src.pinkRose}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                        </div>
                        <div className="category_row">
                            <div className="category_item">
                                Orange
                                <img src={flowers.rose.color.orange.src.orangeRose}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="saved_category">
                        <h5>Alstroemerias</h5>
                        <div className="category_row">
                            <div className="category_item">
                                Red
                                <img src={flowers.alstroemeria.color.red.src.redAlstroemeria}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                            <div
                                className="category_item"
                                onClick={() => {
                                    setSelectedBtn("explore");
                                    navigate(`/explore`);
                                    setActivePost(`${flowers.alstroemeria.color.pink.name}`);
                                }}>
                                Pink
                                <img src={flowers.alstroemeria.color.pink.src.pinkAlstroemeria}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                        </div>
                        <div className="category_row">
                            <div className="category_item">
                                Yellow
                                <img src={flowers.alstroemeria.color.yellow.src.yellowAlstroemeria}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                            <div
                                className="category_item"
                                onClick={() => {
                                    setSelectedBtn("home");
                                    navigate(`/home`);
                                    setActivePost(`${flowers.alstroemeria.color.orange.name}`);
                                }}>
                                Orange
                                <img src={flowers.alstroemeria.color.orange.src.orangeAlstroemeria}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="first_div">
                <div className="saved_row">
                    <div className="saved_category">
                        <h5>Narcissus</h5>
                        <div className="category_row">
                            <div
                                className="category_item"
                                onClick={
                                    () => {
                                        setSelectedBtn("home");
                                        navigate(`/home`);
                                        setActivePost(`${flowers.narcissus.color.white.name}`);
                                    }}>
                                White-Yellow
                                <img src={flowers.narcissus.color.white.src.whiteNarcissus}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                            <div className="category_item">
                                Yellow
                                <img src={flowers.narcissus.color.yellow.src.yellowNarcissus}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="saved_category">
                        <h5>Liliums</h5>
                        <div
                            className="category_row">
                            <div
                                className="category_item"
                                onClick={() => {
                                    setSelectedBtn("explore");
                                    navigate(`/explore`);
                                    setActivePost(`${flowers.lilium.color.pink.name}`);
                                }}>
                                Pink
                                <img src={flowers.lilium.color.pink.src.pinkLilium}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                            <div
                                className="category_item"
                                onClick={() => {
                                    setSelectedBtn("home");
                                    navigate(`/home`);
                                    setActivePost(`${flowers.lilium.color.white.name}`);
                                }}>
                                White
                                <img src={flowers.lilium.color.white.src.whiteLilium}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                        </div>
                        <div className="category_row">
                            <div className="category_item">
                                Yellow
                                <img src={flowers.lilium.color.yellow.src.yellowLilium}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                            <div className="category_item">
                                Orange
                                <img src={flowers.lilium.color.orange.src.orangeLilium}
                                    alt="flower" className="category_item_img" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}