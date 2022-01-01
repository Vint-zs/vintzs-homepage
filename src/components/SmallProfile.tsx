import React from 'react';

interface ISmallProfile {
  imgSrc: string;
  role: string;
}

const SmallProfile = (props: ISmallProfile) => (
  <div>
    <img src={props.imgSrc} />
  </div>
);

export default SmallProfile;
