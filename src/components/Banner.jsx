import React from 'react';
import battleGround from '../assets/images/games/battlegrounds.png';
import Button from "./Button";
import Icon from "./Icon";

const socials = [
  {
    link: '/starladder-twitter',
    icon: 'twitter'
  }, {
    link: '/starladder-twitch',
    icon: 'twitch'
  }, {
    link: '/starladder-fb',
    icon: 'fb'
  }, {
    link: '/starladder-vk',
    icon: 'vk'
  }
];

const detail = [
  {
    id: 'place',
    name: 'Место:',
    value: 'Берлин, Германия'
  }, {
    id: 'date',
    name: 'Даты:',
    value: '22 Сентября – 30 Октября 2020'
  }, {
    id: 'prize',
    name: 'Призы:',
    value: '$1,000,000'
  }
];

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <div className="banner__main">
            <img className="banner__logo" src={battleGround} alt="battleground"/>
            <div className="banner__title">StarSeries i-League CSGO Season 8</div>
            <div className="banner__description">
              Parimatch League CS:GO is the new online league in Counter-Strike: Global Offensive
              from Parimatch and StarLadder, with $100,000 total prize pool.
              16 teams from Europe and the CIS will take part in the League,
              with 4 teams going to League through open qualifiers.
            </div>

            <div className="banner-navigations">
              <div className="banner-navigations__wrapper">
                <Button
                  text="Read Announcement"
                  type="primary"
                  icon="arrow-right"
                />
              </div>
              <div className="banner-navigations__wrapper">
                <Button
                  text="GET TICKETS"
                  type="secondary"
                  icon="tickets"
                />
              </div>
            </div>
          </div>
          <div className="banner__info">
            <div className="banner__detail">
              {
                detail.map(({ id, name, value }) => (
                  <div key={id} className="banner__row">
                    <div className="banner__name">{name}</div>
                    <div className="banner__value">{value}</div>
                  </div>
                ))
              }
            </div>

            <div className="banner__socials">
              {
                socials.map(({ link, icon }) => (
                  <div key={icon} className="banner-social">
                    <a className="banner-social__link" href={link}>
                      <Icon name={icon}/>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
