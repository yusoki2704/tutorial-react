import react from "react";

const ColorfulMessage = (props) => {
  //分割代入:いちいちprops.colorなどと書かなくてよくなる
  const { color, children } = props;
  const contentStyle = {
    //JSでは、color: colorの場合にcolor:部分を省略可能
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
