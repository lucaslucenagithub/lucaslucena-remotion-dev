import { AbsoluteFill, Img, staticFile, useVideoConfig } from "remotion";

export const AvatarPic = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();

  return (
    <div style={{
      position: 'absolute',
      alignItems: 'center',
      alignContent: 'center', 
      alignSelf: 'center',
      textAlign: 'center',
      width: '100%',
      height: '100%',
      top: '30%',
      bottom: '30%'
    }}>
      <Img src={"https://lucaslucena.com/wp-content/uploads/2023/12/Untitled-1015x1024-3.png"} placeholder={"Lucas Lucena"} width={350} />
    </div>
  );
};