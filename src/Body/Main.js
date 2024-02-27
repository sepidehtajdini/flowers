import { useContext, useEffect, useRef } from "react";
import PostContext from "../PostContext";
import TopSidebar from "./Sidebar/TopSidebar";
import Post from "./Post/Post";
export default function Main() {
    const { people, flowers, activePost } = useContext(PostContext);
    const caption1Ref = useRef();
    const caption2Ref = useRef();
    const caption3Ref = useRef();
    const caption4Ref = useRef();
    const caption5Ref = useRef();
    const caption6Ref = useRef();
    const caption7Ref = useRef();
    const caption8Ref = useRef();
    const caption9Ref = useRef();

    const post1Ref = useRef();
    const post2Ref = useRef();
    const post3Ref = useRef();
    const post4Ref = useRef();
    const post5Ref = useRef();
    const post6Ref = useRef();
    const post7Ref = useRef();
    const post8Ref = useRef();
    const post9Ref = useRef();

    useEffect(() => {
        if (activePost === "whiteLilium") {
            post2Ref.current.scrollIntoView();
        }
        if (activePost === "redRose") {
            post3Ref.current.scrollIntoView();
        }
        if (activePost === "orangeAlstroemeria") {
            post5Ref.current.scrollIntoView();
        }
        if (activePost === "whiteNarcissus") {
            post7Ref.current.scrollIntoView();
        }
    }, [activePost])
    return (
        <div className="main">
            <TopSidebar />
            <div className="main_postBar">
                <Post
                    id={flowers.orchid.color.pink.name}
                    creator={people.bradley}
                    postRef={post1Ref}
                    captionRef={caption1Ref}
                    picSrc={flowers.orchid.color.pink.src.pinkOrchid}
                    src1={people.angelina.src.angelina}
                    src2={people.tom.src.tom}
                    lastLiker={people.matthew}
                    time='20mins'
                    txt="Orchidaceae is one of the two largest families of flowering plants,
                     along with the Asteraceae. It contains about 28,000 currently accepted species,
                      distributed across 763 genera. Which of the two families is larger is still unclear,
                       because new members of both of these enormous families are continually discovered.
                        Regardless, the number of orchid species is nearly equal to the number of bony fishes,
                         more than twice the number of bird species, and about four times the number of mammal species"
                />
                <Post
                    id={flowers.lilium.color.white.name}
                    creator={people.tom}
                    postRef={post2Ref}
                    captionRef={caption2Ref}
                    picSrc={flowers.lilium.color.white.src.whiteLilium}
                    src1={people.pop.src.pop}
                    src2={people.bob.src.bob}
                    lastLiker={people.julia}
                    time="1h"
                    txt="Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies. Lilies are a group of flowering plants which are important in culture and literature in much of the world. Most species are native to the northern hemisphere and their range is temperate climates and extends into the subtropics. Many other plants have 'lily' in their common names, but do not belong to the same genus and are therefore not true lilies."
                />
            </div>
            <div className="main_postBar">
                <Post
                    id={flowers.rose.color.red.name}
                    creator={people.pop}
                    postRef={post3Ref}
                    captionRef={caption3Ref}
                    picSrc={flowers.rose.color.red.src.redRose}
                    src1={people.jack.src.jack}
                    src2={people.bob.src.bob}
                    lastLiker={people.alice}
                    time="2d"
                    txt="A rose is either a woody perennial flowering plant of the genus Rosa  in the family Rosaceae or the flower it bears. There are over three hundred species and tens of thousands of cultivars.[citation needed] They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.[2] Their flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds. Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa"
                />
                <Post
                    id={flowers.anthurium.color.red.name}
                    creator={people.jack}
                    postRef={post4Ref}
                    captionRef={caption4Ref}
                    picSrc={flowers.anthurium.color.red.src.redAnthurium}
                    src1={people.bradley.src.bradley}
                    src2={people.bob.src.bob}
                    lastLiker={people.judy}
                    time="3d"
                    txt="Anthurium is a genus of herbs often growing as epiphytes on other plants. Some are terrestrial. The leaves are often clustered and are variable in shape. The inflorescence bears small flowers which are perfect, containing male and female structures. The flowers are contained in close together spirals on the spadix. The spadix is often elongated into a spike shape, but it can be globe-shaped or club-shaped. Beneath the spadix is the spathe, a type of bract. This is variable in shape, as well, but it is lance-shaped in many species. It may extend out flat or in a curve. Sometimes it covers the spadix like a hood. The fruits develop from the flowers on the spadix. They are juicy berries varying in color, usually containing two seeds." />
            </div>
            <div className="main_postBar">
                <Post
                    id={flowers.alstroemeria.color.orange.name}
                    creator={people.julia}
                    postRef={post5Ref}
                    captionRef={caption5Ref}
                    picSrc={flowers.alstroemeria.color.orange.src.orangeAlstroemeria}
                    src1={people.angelina.src.angelina}
                    src2={people.alice.src.alice}
                    lastLiker={people.pop}
                    time="1w"
                    txt="Alstroemeria commonly called the Peruvian lily or lily of the Incas, is a genus of flowering plants in the family Alstroemeriaceae. They are all native to South America, although some have become naturalized in the United States, Mexico, Australia, New Zealand, Madeira and the Canary Islands. Almost all of the species are restricted to one of two distinct centers of diversity; one in central Chile, the other in eastern Brazil. Species of Alstroemeria from Chile are winter-growing plants, while those of Brazil are summer growing. All are long-lived perennials except A. graminea, a diminutive annual from the Atacama Desert of Chile." />
                <Post
                    id={flowers.polianthes.name}
                    creator={people.bob}
                    postRef={post6Ref}
                    captionRef={caption6Ref}
                    picSrc={flowers.polianthes.src.polianthes}
                    src1={people.tom.src.tom}
                    src2={people.bob.src.bob}
                    lastLiker={people.jack}
                    time="2w"
                    txt="polianthes"
                />
            </div>
            <div className="main_postBar">
                <Post
                    id={flowers.narcissus.color.white.name}
                    creator={people.judy}
                    postRef={post7Ref}
                    captionRef={caption7Ref}
                    picSrc={flowers.narcissus.color.white.src.whiteNarcissus}
                    src1={people.bob.src.bob}
                    src2={people.pop.src.pop}
                    lastLiker={people.bradley}
                    time="1m"
                    txt="narcissus" />
                <Post
                    id={flowers.tulipa.color.pink.name}
                    creator={people.jennifer}
                    postRef={post8Ref}
                    captionRef={caption8Ref}
                    picSrc={flowers.tulipa.color.pink.src.pinkTulipa}
                    src1={people.alice.src.alice}
                    src2={people.pop.src.pop}
                    lastLiker={people.matthew}
                    time="1m"
                    txt="tulipa" />
            </div>
            <div className="main_postBar">
                <Post
                    id={flowers.helianthus.name}
                    creator={people.matthew}
                    postRef={post9Ref}
                    captionRef={caption9Ref}
                    picSrc={flowers.helianthus.src.helianthus}
                    src1={people.pop.src.pop}
                    src2={people.alice.src.alice}
                    lastLiker={people.angelina}
                    time="1y"
                    txt="helianthus" />
            </div>
        </div>
    )
}
