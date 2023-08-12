import {BHHeader} from "../Header/BHHeader.jsx";
import {Footer} from "../Footer/Footer.jsx";
import background from '../../assets/img/backgrounds/background1.png';

export const Base = (props) => {
    const { content: Content } = props;


    return (
        <>
            <div
                className="main-page bubble-element Page bubble-r-container flex column"
                style={{
                    justifyContent: "flex-start",
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${background})`,
                    backgroundPosition: 'center top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'repeat-y',
                }}>
                <BHHeader/>
                <Content/>
                <Footer/>
            </div>
        </>
    );
}

export default Base;