import React, {useState} from 'react';
import kanistra from "./canistra.svg";
import coffee from "./coffee.svg";
import hotdog from "./hotdog.svg";

const Pixel = (props) => {
    const [pixelColor, setPixelColor] = useState();
    const [show, setShow] = useState("hidden");
    const element = (e) => {
        if (e === "kanistra")
          return <img src={kanistra} alt="kanistra" style={styles.match} />;
        else if (e === "coffee")
          return <img src={coffee} alt="coffee" style={styles.match} />;
        else return <img src={hotdog} alt="hotdog" style={styles.match} />;
      };
    let styles = {
        pixel: {
            background:pixelColor
        },
        match: {
          visibility:show
        }
    }
    let newPixel = () => {
        setShow("visible");
        setPixelColor("rgb(169, 142, 197)");
        props.click(props.id);
    }

    return(
       <div className="block" onClick={() => newPixel()} style={styles.pixel}>{element(props.type)}
       </div>
    );
    
}

export default Pixel;