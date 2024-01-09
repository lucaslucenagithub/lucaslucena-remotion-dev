import { AbsoluteFill, Img, Sequence, useVideoConfig, Audio, staticFile, Series } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { AvatarPic } from "./Myself/AvatarPic";
import { FONT_FAMILY } from './constants';
import { NotebookWalker } from "./Myself/NotebookWalker";
import { Google } from "./MythDev/Google";
import { KeyboardTyping } from "./MythDev/KeyboardTyping";

const audio = staticFile("audio.wav");

export const MythDev = () => {
    const { fps, durationInFrames, width, height } = useVideoConfig();

    return (
        <>
            <Sequence durationInFrames={90}>
                <Google />
            </Sequence>

            <Sequence from={30} durationInFrames={60}>
                <KeyboardTyping />
            </Sequence>

            {/* <Sequence from={90} durationInFrames={60}>
                <GoogleSearchResult />
            </Sequence> */}

            {/* <Audio src={audio} placeholder={undefined} /> */}
        </>
    );
};