import { useContext } from "react";
import Button from "../../Button/Button";
import "./theme.css";
import PostContext from "../../PostContext";
export default function Theme() {
    const { setTheme } = useContext(PostContext);
    return (
        <div className="main">
            <h3>Themes</h3>
            <div className="first_div theme">
                <div className="theme_shadow">
                    dark
                    <div className="darkTheme">
                        <div className="theme_side">
                            <div>text test txt</div>
                            <div>text test txt</div>
                            <div>text test txt</div>
                        </div>
                        <div className="theme_main">
                            <div className="theme_main_d">
                                <div>text test txt so many texts, a long long text</div>
                                <div>text test txt so many texts, a long long text</div>
                            </div>
                            <div className="theme_main_d">
                                <div>text test txt so many texts, a long long text</div>
                                <div>text test txt so many texts, a long long text</div>
                            </div>
                            <div />
                        </div>
                    </div>
                    <Button
                        btnClass="blueBtn"
                        txt="Set"
                        onClick={() => setTheme("dark")} />
                </div>
                <div className="theme_shadow">
                    light
                    <div className="lightTheme">
                        <div className="theme_side">
                            <div>text test txt</div>
                            <div>text test txt</div>
                            <div>text test txt</div>
                        </div>
                        <div className="theme_main">
                            <div className="theme_main_d">
                                <div>text test txt so many texts, a long long text</div>
                                <div>text test txt so many texts, a long long text</div>
                            </div>
                            <div className="theme_main_d">
                                <div>text test txt so many texts, a long long text</div>
                                <div>text test txt so many texts, a long long text</div>
                            </div>
                            <div />
                        </div>
                    </div>
                    <Button
                        btnClass="blueBtn"
                        txt="Set"
                        onClick={() => setTheme("light")}
                    />
                </div>
            </div>

        </div>
    )
}