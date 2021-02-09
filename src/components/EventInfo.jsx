import React from 'react';
import Icon from "./Icon";

const steps = [
  {
    isActive: true,
    title: 'Registration',
    text: '29 sep, 19:00 – 20 nov, 10:00',
    icon: 'cup'
  }, {
    title: 'Check-in',
    text: '29 sep, 19:00 – 20 nov, 10:00',
    icon: 'check-in'
  }, {
    title: 'Scheduling:',
    text: '29 sep, 19:00 – 20 nov, 10:00',
    icon: 'date'
  }
];

const nav = [
  {
    name: 'Support',
  }, {
    name: 'Rules',
  }, {
    name: 'FAQ'
  }
];

const EventInfo = () => {
  return (
    <aside className="events-info">
      <div className="events-info__wrapper">
        {steps.map(({ isActive = false, title, text, icon }) => (
          <div key={title} className={`events-info-step ${isActive ? 'active' : ''}`}>
            <div className="events-info-step__circle">
              <Icon name={icon}/>
            </div>
            <div className="events-info-step__inner">
              <div className="events-info-step__title">{title}</div>
              <div className="events-info-step__text">{text}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="events-info-btn" type="button">
        <Icon name="circle-check"/>
        <div className="events-info-btn__title">Вы зарегистрированы</div>
        <div className="events-info-btn__text">Team: Natus vincere (#353)</div>
      </button>

      <div className="events-info-nav">
        {nav.map(({ name }) => (
          <div className="events-info-nav__item">
            <button type="button" className="events-info-nav__name">{name}</button>
            <Icon name="caret-right"/>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default EventInfo;
