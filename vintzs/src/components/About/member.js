import React from 'react'

const BRIEF = "약력";
const ROLE = "담당";
const PROFILE_IMAGE = "프로필 사진"

export default function Member({imgSrc, name, records, personalRole}) {
  return (
    <div className="introduce">
      <span className="image main">
        <img src={imgSrc} alt={PROFILE_IMAGE} />
      </span>
      <ul className="letter">
        {name}
        {BRIEF}
        {records.map((element) => {
          return(<li>{element}</li>)
        })}
        {ROLE}
        <li>{personalRole}</li>
      </ul>
    </div>
  );
}