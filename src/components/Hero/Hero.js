import React from 'react'
import "./Hero.css"
import { Header } from '../Header/Header';
import Heart from '../../assets/heart.png';
import hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import hero_image from '../../assets/hero_image.png'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>Best Fitness Club Of the City</span>
        </div>
        {/* Heading for this Hero-page */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND
              LIVE UP TO YOUR LIFE TO FULLEST
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+11001</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+140</span>
            <span>fitness program</span>
          </div>
          {/* Hero-buttons */}
          <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
          </div>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        {/* <img src={hero_image} /> */}
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image} className="hero-image" />
        <img src={hero_image_back} className="hero-image-back" />
        <div className="calories">
          <img src={Calories} alt="" />
          <span>Calories Burnt</span>
          <span>200kcal</span>
        </div>
      </div>
    </div>
  );
}
