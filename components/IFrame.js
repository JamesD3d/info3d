const IFrame = ({ src, width, height, title }) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      title={title}
      style={{ 
        border: 'none' ,
        backgroundColor: 'transparent',
      }}
      allowTransparency="true"
    />
  );
};

export default IFrame;