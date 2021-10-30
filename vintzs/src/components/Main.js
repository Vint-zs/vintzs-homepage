import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/로고1.png'
import pic02 from '../images/pic02.jpg'

import About from './About'

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
          <span className="image big">
            <img src={pic01} alt="" />
          </span>
          <span>
            Welcome to PetPal Village!<br/>
            <br/>
            In our village, various neighbors around the world are living.<br/>
            Send and receive letters with them and become pals to each other.<br/>
            Your pets will deliver letters and connect you to the world.<br/>
            Start a conversation that will make your heart flutter!<br/>
            <br/>
            · Mailing time depends on types of pets. Adjust the mailing time by selecting the pet<br/>
            · Pets will match you the right neighbors based on your interest and used language<br/>
            · Adopt diverse pets of your choice and customize their features
          </span>
          <br />
          <br />
          <p>
            <a href="#work">android</a> /<a href="#work">ios</a>.
          </p>
          {close}
        </article>

        <article
          id="Meeting Univ."
          className={`${
            this.props.article === 'Meeting Univ.' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">미팅대학</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <p>
            We are building '미팅 대학' service in Korea. 
          </p>
          <p>
            It will be released in March 2022.
            <br />
            See you!
          </p>

          {close}
        </article>

        <About props={this.props} />

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
