import {BHHeader} from "../Header/BHHeader.jsx";
import {Footer} from "../Footer/Footer.jsx";

export const Base = (props) => {
    const { content: Content } = props;


    return (
        <>
            <div
                className="main-page bubble-element Page bubble-r-container flex column"
                style={{
                    width: "100%",
                    marginRight: "auto",
                    marginLeft: "auto",
                    position: "relative",
                    zIndex: 1,
                    minHeight: "max(0px, 100%)",
                    height: "max-content",
                    flexShrink: 0,
                    justifyContent: "flex-start",
                    opacity: 1,
                    background:
                        'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F38a0942e450bdb16ca9cf24659307840.cdn.bubble.io%2Ff1648042080335x457986908089333950%2FGroup%25201000000957%2520%25281%2529.png?w=1536&h=&auto=compress&dpr=2&fit=max") center top / cover repeat-y rgba(255, 255, 255, 0)'
                }}>
                <BHHeader/>
                <Content/>
                <Footer/>
            </div>
        </>
    );
}

export default Base;