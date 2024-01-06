import { AbsoluteFill, Img, Sequence, useVideoConfig } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { AvatarPic } from "./Myself/AvatarPic";
import { FONT_FAMILY } from './constants';
import { NotebookWalker } from "./Myself/NotebookWalker";
import { NeedHelp } from "./Myself/NeedHelp";

export const Myself = () => {
	const { fps, durationInFrames, width, height } = useVideoConfig();

	return (
		<AbsoluteFill
			style={{
				fontSize: 50,
				backgroundColor: "white",
				color: "black"
			}}
		>
			<TransitionSeries>
				<TransitionSeries.Sequence durationInFrames={150}>

					<AvatarPic />
					<Sequence from={20}>
						<h4 style={{
							fontFamily: FONT_FAMILY,
							fontWeight: 'bold',
							fontSize: 50,
							textAlign: 'center',
							position: 'absolute',
							bottom: 230,
							width: '100%',
						}}>This is a programmatically video developed by Lucas Lucena.</h4>
					</Sequence>
					<Sequence from={70}>
						<h6 style={{
							fontFamily: FONT_FAMILY,
							fontWeight: 'bold',
							fontSize: 40,
							textAlign: 'center',
							position: 'absolute',
							bottom: 120,
							width: '100%',
						}}>Check the source code at: lucaslucena-remotion-dev</h6>
					</Sequence>

				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					presentation={slide()}
					timing={linearTiming({ durationInFrames: 30 })}
				/>
				<TransitionSeries.Sequence durationInFrames={150}>
					<NotebookWalker />
					<h4 style={{
							fontFamily: FONT_FAMILY,
							fontWeight: 'bold',
							fontSize: 50,
							textAlign: 'start',
							position: 'absolute',
							bottom: '10%',
							top: '20%',
							right: 0,
							height: '100%',
							width: '63%',
							padding: 100
						}}>Make a video of your business with remotion dev and automate your company's content creation.</h4>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					presentation={slide()}
					timing={linearTiming({ durationInFrames: 30 })}
				/>
				<TransitionSeries.Sequence durationInFrames={999}>
					<NeedHelp />					
				</TransitionSeries.Sequence>
			</TransitionSeries>

		</AbsoluteFill>
	);
};