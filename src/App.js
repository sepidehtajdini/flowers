import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import PostContext from "./PostContext";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Main from "./Body/Main";
import Explore from "./Body/Explore";
import Notifications from "./Body/Notifications/Notifications";
import Saved from "./Body/Saved/Saved";
import Theme from "./Body/Theme/Theme";
import Messages from "./Body/Messages/Messages";
import Settings from "./Body/Settings";

import jennifer from "./img/people/jennifer.jpg";
import angelina from "./img/people/angelina.jpg";
import bradley from "./img/people/bradley.jpg";
import jack from "./img/people/jack.jpg";
import judy from "./img/people/judy.jpg";
import alice from "./img/people/alice.jpg";
import bob from "./img/people/bob.jpg";
import pop from "./img/people/pop.jpg";
import julia from "./img/people/julia.JPG";
import matthew from "./img/people/matthew.jpg";
import tom from "./img/people/tom.jpg";
import haily from "./img/people/haily.jpg";
import selena from "./img/people/selena.jpg";
import enrique from "./img/people/enrique.jpg";
import david from "./img/people/david.jpg";
import sarah from "./img/people/sarah.jpg";
import zac from "./img/people/zac.jpg";
import justin from "./img/people/justin.jpg";

import redAnthurium from "./img/flowers/Anthurium/red-anthurium.jpg";
import pinkOrchid from "./img/flowers/Orchid/pink-orchid.jpg";
import whiteLilium from "./img/flowers/Lilium/white-lilium.jpg";
import orangeLilium from "./img/flowers/Lilium/orange-lilium.jpg";
import pinkLilium from "./img/flowers/Lilium/pink-lilium.jpg";
import yellowLilium from "./img/flowers/Lilium/yellow-lilium.jpg";

import redRose from "./img/flowers/Rose/red-rose.jpg";
import orangeRose from "./img/flowers/Rose/orange-rose.jpg";
import whiteRose from "./img/flowers/Rose/white-rose.jpg";
import blackRose from "./img/flowers/Rose/black-rose.jpg";
import pinkRose from "./img/flowers/Rose/pink-rose.jpg";

import whiteNarcissus from "./img/flowers/Narcissus/white-narcissus.jpg";
import yellowNarcissus from "./img/flowers/Narcissus/yellow-narcissus.jpg";

import pinkTulipa from "./img/flowers/Tulipa/pink-tulipa.jpg";
import redTulipa from "./img/flowers/Tulipa/red-tulipa.jpg";

import redAlstroemeria from "./img/flowers/Alstroemeria/red-alstroemeria.jpg";
import orangeAlstroemeria from "./img/flowers/Alstroemeria/orange-alstroemeria.jpg";
import pinkAlstroemeria from "./img/flowers/Alstroemeria/pink-alstroemeria.jpg";
import yellowAlstroemeria from "./img/flowers/Alstroemeria/yellow-alstroemeria.jpg";
import polianthes from "./img/flowers/polianthes.jpg";
import helianthus from "./img/flowers/helianthus.jpg";

import "./App.css";
export default function App() {
    const [selectedBtn, setSelectedBtn] = useState("home");
    const [showAllLikers, setShowAllLikers] = useState(false);
    const [theme, setTheme] = useState("light");
    const [activePost, setActivePost] = useState("");
    const [offcanvasDisplay, setOffcanvasDisplay] = useState(false);
    const [profileShow, setProfileShow] = useState(false);
    const people = {
        angelina: { id: "angelinajolie", src: { angelina } },
        bradley: { id: "bradleycooperofficial", src: { bradley } },
        jack: { id: "jacknicholsonofficial", src: { jack } },
        jennifer: { id: "jeni_a50", src: { jennifer } },
        judy: { id: "judy4554", src: { judy } },
        alice: { id: "alice_seger", src: { alice } },
        bob: { id: "bobofficial", src: { bob } },
        julia: { id: "juliaroberts", src: { julia } },
        tom: { id: "realtomcruise", src: { tom } },
        matthew: { id: "thematt", src: { matthew } },
        pop: { id: "franciscus", src: { pop } },
        selena: { id: "selenagomez", src: { selena } },
        haily: { id: "hailybieber", src: { haily } },
        david: { id: "davidbeckham", src: { david } },
        enrique: { id: "enriqueiglesias", src: { enrique } },
        sarah: { id: "sarahconnor", src: { sarah } },
        zac: { id: "zac_efron", src: { zac } },
        justin: { id: "justin.timberlake", src: { justin } }
    }
    const flowers = {
        orchid: {
            color: {
                pink: { src: { pinkOrchid }, name: "pinkOrchid" }
            }
        },
        anthurium: {
            color: {
                red: { src: { redAnthurium }, name: "redAnthurium" }
            }
        },
        tulipa: {
            color: {
                pink: { src: { pinkTulipa }, name: "pinkTulipa" },
                red: { src: { redTulipa }, name: "redTulipa" }
            }
        },
        narcissus: {
            color: {
                white: { src: { whiteNarcissus }, name: "whiteNarcissus" },
                yellow: { src: { yellowNarcissus }, name: "yellowNarcissus" }
            }
        },
        rose: {
            color: {
                red: { src: { redRose }, name: 'redRose' },
                orange: { src: { orangeRose }, name: "orangeRose" },
                pink: { src: { pinkRose }, name: "pinkRose" },
                white: { src: { whiteRose }, name: "whiteRose" },
                black: { src: { blackRose }, name: "blackRose" }
            }
        },
        alstroemeria: {
            color: {
                red: { src: { redAlstroemeria }, name: "redAlstroemeria" },
                orange: { src: { orangeAlstroemeria }, name: "orangeAlstroemeria" },
                pink: { src: { pinkAlstroemeria }, name: "pinkAlstroemeria" },
                yellow: { src: { yellowAlstroemeria }, name: "yellowAlstroemeria" }
            }
        },
        lilium: {
            color: {
                white: { src: { whiteLilium }, name: "whiteLilium" },
                pink: { src: { pinkLilium }, name: "pinkLilium" },
                orange: { src: { orangeLilium }, name: "orangeLilium" },
                yellow: { src: { yellowLilium }, name: "yellowLilium" }
            }
        },
        polianthes: { name: "polianthes", src: { polianthes } },
        helianthus: { name: "helianthus", src: { helianthus } }
    }
    const router = createBrowserRouter([{
        path: "/",
        element: <Body />,
        children: [
            {
                path: "home",
                element: <Main />
            },
            {
                path: "explore",
                element: <Explore />
            },
            {
                path: "notifications",
                element: <Notifications />
            },
            {
                path: "saved",
                element: <Saved />
            },
            {
                path: "theme",
                element: <Theme />
            }, {
                path: "messages",
                element: <Messages />
            },
            {
                path: "settings",
                element: <Settings />
            },
        ]
    }
    ])
    useEffect(() => {
        if (window.innerWidth > 991) { setProfileShow(true) }
        else { setProfileShow(false) }
    }, [])
    return (
        <PostContext.Provider
            value={{
                showAllLikers, setShowAllLikers,
                people, flowers,
                selectedBtn, setSelectedBtn,
                theme, setTheme,
                activePost, setActivePost,
                offcanvasDisplay, setOffcanvasDisplay,
                profileShow
            }}>
            <div className={theme}>
                <Header />
                <RouterProvider router={router}>
                    <Body />
                </RouterProvider>
            </div>
        </PostContext.Provider >
    )
}