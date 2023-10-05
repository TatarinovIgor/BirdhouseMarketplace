import {BHHeader} from "../Header/BHHeader.jsx";
import {Footer} from "../Footer/Footer.jsx";
import background from '../../assets/img/backgrounds/background1.png';
import {Divider} from "antd";

const Base = (props) => {
    const { content: Content } = props;
    const isMobile = window.innerWidth <= 768;


    return (
        <>
            <div style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${background})`,
                    backgroundPosition: 'center top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'repeat-y',
            }}>
                <BHHeader/>
                <div style={
                    isMobile
                        ? {
                            display: "flex",
                            justifyContent: "center",
                        }
                        : {
                            display: "flex",
                            justifyContent: "center",
                            paddingBottom: 70,
                            paddingLeft: 30,
                            paddingRight: 30,
                        }
                }>
                    <Content/>
                </div>
                <Divider/>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: 70,
                }}>
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default Base;
