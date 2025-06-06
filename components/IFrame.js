import React from "react";

export default function IFrame(props) {
  return (
    <iframe
      src={props.src}
      width={props.width}
      height={props.height}
      title={props.title}
      style={{ border: "none", background: "transparent" }}
      loading="lazy"
      allowFullScreen
    />
  );
}