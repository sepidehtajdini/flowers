import { useContext } from "react";
import PostContext from "../../PostContext";
export default function TopSidebar() {
    const { flowers } = useContext(PostContext);
    return (
        <div className="topSidebar">
            <a href={"#" + flowers.lilium.color.white.name}>
                <img src={flowers.lilium.color.white.src.whiteLilium} alt="lilium flower" loading="lazy" />
            </a>
            <a href={"#" + flowers.rose.color.red.name}>
                <img src={flowers.rose.color.red.src.redRose} alt="rose flower" loading="lazy" />
            </a>
            <a href={"#" + flowers.orchid.color.pink.name}>
                <img src={flowers.orchid.color.pink.src.pinkOrchid} alt="orchid flower" loading="lazy" />
            </a>
            <a href={"#" + flowers.anthurium.color.red.name}>
                <img src={flowers.anthurium.color.red.src.redAnthurium} alt="anthurium flower" loading="lazy" />
            </a>
            <a href={"#" + flowers.narcissus.color.white.name}>
                <img src={flowers.narcissus.color.white.src.whiteNarcissus} alt="narcissus flower" loading="lazy" />
            </a>
            <a href={"#" + flowers.tulipa.color.pink.name}>
                <img src={flowers.tulipa.color.pink.src.pinkTulipa} alt="tulipa flower" loading="lazy" />
            </a>
            <a href={"#" + flowers.helianthus.name}>
                <img src={flowers.helianthus.src.helianthus} alt="helianthus flower" loading="lazy" />
            </a>
            <a href={"#" + flowers.alstroemeria.color.orange.name}>
                <img src={flowers.alstroemeria.color.orange.src.orangeAlstroemeria}
                    alt="alstromeria flower" loading="lazy" />
            </a>
            <a href={"#" + flowers.polianthes.name}>
                <img src={flowers.polianthes.src.polianthes} alt="polianthes flower" loading="lazy" />
            </a>
        </div>
    )
}