import { AbsoluteFill, Img, staticFile, useVideoConfig } from "remotion";

export const NotebookWalker = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();

  return (
    <div style={{
      position: 'absolute',
      left: '0',
        padding: '100px'
    }}>
      
      <Img src={staticFile("man-walking-while-holding-laptop-5510289-4596728.gif")} placeholder={"Notebook beign holded"} width={600}/>
    </div>
  );
};