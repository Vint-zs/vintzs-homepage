import React from 'react'
import * as S from './style'

const BRIEF = '약력'
const ROLE = '담당'
const PROFILE_IMAGE = '프로필 사진'

export default function Member({ imgSrc, name, records, personalRole }) {
  return (
    <S.MemberInfor className="introduce">
      <span className="image main profile-img">
        <img src={imgSrc} alt={PROFILE_IMAGE} />
      </span>
      <ul className="letter">
        <p className="name">{name}</p>
        <p className="title">{BRIEF}</p>
        {records.map(element => {
          return <li>{element}</li>
        })}
        <p className="title">{ROLE}</p>
        <li>{personalRole}</li>
      </ul>
    </S.MemberInfor>
  )
}
