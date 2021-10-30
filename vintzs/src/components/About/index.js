import React from 'react'
import Member from './member'

import youngwon from '../../images/영운.png'
import hyunbin from '../../images/현빈.png'
import soyun from '../../images/소윤.png'
import joonoh from '../../images/준오.png'
import hyunjoon from '../../images/현준.png'

import {
  ywRecord,
  hbRecord,
  syRecord,
  joRecord,
  hjRecord,
} from '../../constants/member'

const ABOUT_TITLE = 'About'

let close = (
  <div
    className="close"
    onClick={() => {
      this.props.onCloseArticle()
    }}
  ></div>
)

export default function About({ props }) {
  const articleClassName = `${props.article === 'about' ? 'active' : ''} ${
    props.articleTimeout ? 'timeout' : ''
  }`

  return (
    <article
      id="about"
      className={articleClassName}
      style={{ display: 'none' }}
    >
      <h2 className="major">{ABOUT_TITLE}</h2>
      <p>Let me introduce our people!</p>

      <Member
        imgSrc={youngwon}
        name={'서영운'}
        records={ywRecord}
        personalRole={'대표 / 서버 개발'}
      />
      <Member
        imgSrc={hyunbin}
        name={'권현빈'}
        records={hbRecord}
        personalRole={'앱 / 웹 개발'}
      />
      <Member
        imgSrc={joonoh}
        name={'김준오'}
        records={joRecord}
        personalRole={'ios 개발'}
      />
      <Member
        imgSrc={soyun}
        name={'오소윤'}
        records={syRecord}
        personalRole={'사업기획 / 마케팅'}
      />
      <Member
        imgSrc={hyunjoon}
        name={'최현준'}
        records={hjRecord}
        personalRole={'Web Frontend / Backend 개발'}
      />
      {close}
    </article>
  )
}
