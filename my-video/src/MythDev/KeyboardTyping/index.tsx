import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard } from '@fortawesome/free-solid-svg-icons'
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_FAMILY } from "../../constants";

export const KeyboardTyping = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const text = "meusite.com";

    // Calculate the number of characters to show based on the current frame
    const charactersToShow = Math.floor(interpolate(frame, [0, text.length * (fps / 10)], [0, text.length]));

    // The text that will be displayed
    const displayedText = text.substr(0, charactersToShow);

    return (
        <div style={{
            fontFamily: 'Roboto, sans-serif', position: 'absolute', height: '100%', width: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-35em, -4.35em)'
        }}>
            <span style={{ width: '100%', fontSize: '42px' }} >{displayedText}</span>
        </div>
    );
};