import React from 'react';

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img"
           src={props.item && props.item.img}
           alt="가위바위보이미지"/>
      <h2>Win</h2>
    </div>
  );
};

export default Box;
