// A block to change color of components when hovering over them
import React, { useState } from "react";

function HoverBlock(props) {
  const [isHover, setIsHover] = useState(false);
  const style = !isHover ? { ...props.style } : { ...props.style,...props.hover };
  const updatedChildren = React.Children.map(props.children, (child, idx) =>
    React.cloneElement(child, {
      style: {...child.props.style,...style},
      onMouseEnter: () => setIsHover(true),
      onMouseLeave: () => setIsHover(false),
    })
  );
  return <>
    {updatedChildren}
  </>;
}

export default HoverBlock;
