import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/로고1.png'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/영운.jpg'
import pic04 from '../images/현빈.jpg'
import pic05 from '../images/소윤.jpg'
import pic06 from '../images/준오.jpeg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="PetPal"
          className={`${this.props.article === 'PetPal' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">PetPal</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <pre>
            Welcome to PetPal Village!<br/>
            <br/>
            In our village, various neighbors around the world are living.<br/>
            Send and receive letters with them and become pals to each other.<br/>
            <br/>
            Your pets will deliver letters and connect you to the world.<br/>
            <br/>
            Start a conversation that will make your heart flutter!<br/>
            <br/>
            <br/>
            · Mailing time depends on types of pets. Adjust the mailing time by selecting the pet<br/>
            · Pets will match you the right neighbors based on your interest and used language<br/>
            · Adopt diverse pets of your choice and customize their features
          </pre>
          <p>
            <a href="#work">android</a> / 
            <a href="#work">ios</a>.
          </p>
          {close}
        </article>

        <article
          id="Meeting Univ."
          className={`${this.props.article === 'Meeting Univ.' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">미팅대학</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            We are building '미팅 대학' service in Korea. 
          </p>
          <p>
            It will be released in March 2022.
            <br/>
            See you!
          </p>
          
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            Let me introduce our people!
          </p>
            
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <ul>
            서 영 운
            <br />
            약력
            <br />
            <li>(현)서울대학교 bio intelligence lab 인턴</li>
            <li>(전)키즈노트 안드로이드 개발자</li>
            <li>중앙대학교 공학교육혁신센터 창업공모전 은상</li>
            <li>(현)중앙대학교 소프트웨어전공</li>
            <br />
            담당
            <li>대표 / 서버 개발</li>
          </ul>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <ul>
            권 현 빈
            <br />
            약력
            <br />
            <li>(현)엘리스 AI 트랙 전산학, 웹 프론트 실습 코치</li>
            <li>(전)중앙대학교 인지각 연구실 SW개발 인턴</li>
            <li>(전)하얀마인드 영어 교육 앱 개발 인턴</li>
            <li>삼성SDS pro 알고리즘 자격증</li>
            <li>(현)중앙대학교 컴퓨터공학전공</li>
            <br />
            담당
            <li>앱/웹 개발</li>
          </ul>
          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <span>
            오 소 윤
            <br />
            약력
            <li>모은행 글로벌플랫폼부 재직</li>
            <li>aT 폴란드사무소 인턴</li>
            <li>두유요거트 오소야 창업</li>
            <li>고려사이버대 AI 전공</li>
            <li>한국외대 프랑스어 전공</li>
            <br />
            담당
            <br />
            <li>사업기획 / 마케팅</li>
          </span>
          <span className="image main">
            <img src={pic06} alt="" />
          </span>
          <span>
            김 준 오
            <br />
            약력
            <li>(현) 인공지능 스타트업 근무</li>
            <li>(전) sundosoft  개발팀 근무</li>
            <li>(현) 중앙대 소프트웨어 전공</li>
            <br />
            담당
            <li>ios 개발</li>
          </span>
          {close}
        </article>

        {/* <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article> */}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
