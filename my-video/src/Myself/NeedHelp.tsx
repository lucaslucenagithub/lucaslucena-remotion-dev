import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard } from '@fortawesome/free-solid-svg-icons'
import { AbsoluteFill, Img, staticFile, useVideoConfig } from "remotion";

export const NeedHelp = () => {
    const { fps, durationInFrames, width, height } = useVideoConfig();

    return (
        <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center', alignContent: 'center', textAlign: 'center', justifyContent: 'center', width: '100%'}}>
            <h2 style={{textAlign: 'center'}}>Need Help?</h2>
            <div style={{display: 'flex'}}>  
            <FontAwesomeIcon icon={faContactCard} style={{marginRight: 30}}/> 
             <span>+55 11 9 4626-3622</span>
             </div>
           
        </div>
    );
};