import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard } from '@fortawesome/free-solid-svg-icons'
import { AbsoluteFill, Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const Google = () => {
    const { fps, durationInFrames, width, height } = useVideoConfig();

    const frame = useCurrentFrame();
    const scale = spring({
        frame: frame,
        fps: 30,
        from: 1,
        to: 2, // Zoom to 200% of the original size
        config: {
        stiffness: 100,
        damping: 200,
        },
    });

    return (
        <>
        <AbsoluteFill style={{background: 'white'}}>
        <Img src={staticFile('google.png')} placeholder={undefined} style={{transform: `translateX(0.1rem) translateY(11.5rem) scale(${scale})`}}/>
        </AbsoluteFill>
        </>
    );
};