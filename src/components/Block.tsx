import React from "react";
interface blockProps {
  value?: string | null;
  onClick?: () => void;
}

const Block: React.FC<blockProps> = (props) => {
  return (
    <div onClick={props.onClick} className="block">
      {props.value}
    </div>
  );
};

export default Block;
