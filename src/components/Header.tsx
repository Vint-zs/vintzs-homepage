import React from 'react';

interface IHeader {
  menu: string[];
  selected: number;
}

const SmallProfile = (props: IHeader) => (
  <div>
    {props.menu.map((element, index) => (
      <p key={index}>{element}</p>
    ))}
  </div>
);

export default SmallProfile;
