import React from 'react'
import Member from "./member";

import pic03 from '../../images/영운.png'
import pic04 from '../../images/현빈.png'
import pic05 from '../../images/소윤.png'
import pic06 from '../../images/준오.png'

const yyRecord = [
  "(현)서울대학교 bio intelligence lab 인턴", 
  "(전)키즈노트 안드로이드 개발자", 
  "중앙대학교 공학교육혁신센터 창업공모전 은상", 
  "(현)중앙대학교 소프트웨어전공"
];
const hbRecord = [
  "(현)엘리스 AI 트랙 전산학, 웹 프론트 실습 코치", 
  "(전)중앙대학교 인지각 연구실 SW개발 인턴",
  "(전)하얀마인드 영어 교육 앱 개발 인턴",
  "삼성SDS pro 알고리즘 자격증",
  "(현)중앙대학교 컴퓨터공학전공"
];
const syRecord = [
  "모은행 글로벌플랫폼부 재직",
  "aT 폴란드사무소 인턴",
  "두유요거트 오소야 창업",
  "고려사이버대 AI 전공",
  "한국외대 프랑스어 전공"
];
const joRecord = [
  "(현) 인공지능 스타트업 근무",
  "(전) sundosoft  개발팀 근무",
  "(현) 중앙대 소프트웨어 전공"
];

const ABOUT_TITLE = "About";

let close = (
  <div
    className="close"
    onClick={() => {
      this.props.onCloseArticle()
    }}
  ></div>
)

export default function About({props}) {
  const articleClassName = `${props.article === 'about' ? 'active' : ''} ${ props.articleTimeout ? 'timeout' : '' }`
  return (
  <article
    id="about"
    className={articleClassName}
    style={{ display: 'none' }}
  >
      <h2 className="major">{ABOUT_TITLE}</h2>
      <p>
        Let me introduce our people!
      </p>
        
      <Member imgSrc={pic03} name={"서영운"} records={yyRecord} personalRole={"대표 / 서버 개발"} />
      <Member imgSrc={pic04} name={"권현빈"} records={hbRecord} personalRole={"앱 / 웹 개발"} />
      <Member imgSrc={pic05} name={"오소윤"} records={syRecord} personalRole={"사업기획 / 마케팅"} />
      <Member imgSrc={pic06} name={"김준오"} records={joRecord} personalRole={"ios 개발"} />
      {close}
    </article>
  );
}