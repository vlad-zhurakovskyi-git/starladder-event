import React, { useState } from 'react';
import Card from "./Card";
import UserTable from './UsersTable';

const matches = [
  {
    id: 'first',
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'matches',
    status: 'live',
    link: '#super-test-link',
    partner: 'ggbet',
    system: 'bo 3',
    score: '1:0 • 0:1 • 1:0',
    time: '19:00',
    date: '29 october',
    teams: [
      {
        logo: 'albert-warren',
        name: 'Albert Warren',
        outcome: '3.22'
      }, {
        logo: 'glori-henry',
        name: 'Gloria Henry',
        outcome: '53.22'
      }
    ],
  }, {
    id: 'second',
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'matches',
    status: 'upcoming',
    partner: 'ggbet',
    system: 'bo 3',
    score: '1:0 • 0:1 • 1:0',
    time: '19:00',
    date: '29 october',
    timer: '5h 39min',
    teams: [
      {
        logo: 'albert-warren',
        name: 'Albert Warren',
        outcome: '3.22'
      }, {
        logo: 'glori-henry',
        name: 'Gloria Henry',
        outcome: '53.22'
      }
    ],
  }, {
    id: 'three',
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'matches',
    status: 'finish',
    partner: 'ggbet',
    system: 'bo 3',
    score: '1:0 • 0:1 • 1:0',
    time: '19:00',
    date: '29 october',
    timer: '5h 39min',
    teams: [
      {
        logo: 'albert-warren',
        name: 'Albert Warren',
        outcome: '3.22',
        score: '1'
      }, {
        logo: 'glori-henry',
        name: 'Gloria Henry',
        outcome: '53.22',
        score: '2'
      }
    ],
  }, {
    id: 'four',
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'matches',
    status: 'live',
    link: '#super-test-link',
    partner: 'ggbet',
    system: 'bo 3',
    score: '1:0 • 0:1 • 1:0',
    time: '19:00',
    date: '29 october',
    teams: [
      {
        logo: 'albert-warren',
        name: 'Albert Warren',
        outcome: '3.22'
      }, {
        logo: 'glori-henry',
        name: 'Gloria Henry',
        outcome: '53.22'
      }
    ],
  }, {
    id: 'five',
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'matches',
    status: 'upcoming',
    partner: 'ggbet',
    system: 'bo 3',
    score: '1:0 • 0:1 • 1:0',
    time: '19:00',
    date: '29 october',
    timer: '5h 39min',
    teams: [
      {
        logo: 'albert-warren',
        name: 'Albert Warren',
        outcome: '3.22'
      }, {
        logo: 'glori-henry',
        name: 'Gloria Henry',
        outcome: '53.22'
      }
    ],
  }, {
    id: 'third',
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'matches',
    status: 'finish',
    partner: 'ggbet',
    system: 'bo 3',
    score: '1:0 • 0:1 • 1:0',
    time: '19:00',
    date: '29 october',
    timer: '5h 39min',
    teams: [
      {
        logo: 'albert-warren',
        name: 'Albert Warren',
        outcome: '3.22',
        score: '1'
      }, {
        logo: 'glori-henry',
        name: 'Gloria Henry',
        outcome: '53.22',
        score: '2'
      }
    ],
  }
];
const battles = [
  {
    id: 'firstId',
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'battles',
    status: 'live',
    link: '#super-test-link',
    system: 'bo 3',
    score: '1:0 • 0:1 • 1:0',
    time: '19:00',
    date: '29 october',
    matchNumber: '#1',
    map: 'Erangel',
    groups: [
      {
        name: 'Group A',
      }, {
        name: 'Group B',
      }
    ],
  }, {
    id: 'secondId',
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'battles',
    status: 'upcoming',
    link: '#super-test-link',
    system: 'bo 3',
    score: '1:0 • 0:1 • 1:0',
    time: '19:00',
    date: '29 october',
    matchNumber: '#1',
    map: 'Erangel',
    groups: [
      {
        name: 'Group A',
      }, {
        name: 'Group B',
      }
    ],
  }, {
    id: 'thirdId',
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'battles',
    status: 'finish',
    winner: 'Natus Vincere (A) - 233pts',
    link: '#super-test-link',
    system: 'bo 3',
    score: '1:0 • 0:1 • 1:0',
    time: '19:00',
    date: '29 october',
    matchNumber: '#1',
    map: 'Erangel',
    groups: [
      {
        name: 'Group A',
      }, {
        name: 'Group B',
      }
    ],
  }, {
    id: 'fourId',
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'battles',
    status: 'live',
    link: '#super-test-link',
    system: 'bo 3',
    score: '1:0 • 0:1 • 1:0',
    time: '19:00',
    date: '29 october',
    matchNumber: '#1',
    map: 'Erangel',
    groups: [
      {
        name: 'Group A',
      }, {
        name: 'Group B',
      }
    ],
  }, {
    id: 'fiveId',
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'battles',
    status: 'upcoming',
    link: '#super-test-link',
    system: 'bo 3',
    score: '1:0 • 0:1 • 1:0',
    time: '19:00',
    date: '29 october',
    matchNumber: '#1',
    map: 'Erangel',
    groups: [
      {
        name: 'Group A',
      }, {
        name: 'Group B',
      }
    ],
  }, {
    id: 'sixId',
    tournamentName: 'Asia Minor: Play-Off',
    cardTab: 'battles',
    status: 'finish',
    winner: 'Natus Vincere (A) - 233pts',
    link: '#super-test-link',
    system: 'bo 3',
    score: '1:0 • 0:1 • 1:0',
    time: '19:00',
    date: '29 october',
    matchNumber: '#1',
    map: 'Erangel',
    groups: [
      {
        name: 'Group A',
      }, {
        name: 'Group B',
      }
    ],
  }
];

const tabsItems = [
  {
    name: 'Matches',
    component: () => matches.map((item) => (
      <div className="events-card">
        <div className="events-card__wrapper">
          <Card key={item.id} item={item}/>
        </div>
      </div>
    )),
  },
  {
    name: 'Battles',
    component: () => battles.map((item) => (
      <div className="events-card">
        <div className="events-card__wrapper">
          <Card key={item.id} item={item}/>
        </div>
      </div>
    )),
  },
];

const contentComponent = (items, activeTabId) => {
  const Component = items[activeTabId].component;
  return <Component />;
};

const Events = () => {
  const [activeTabId, setActiveTab] = useState(0);

  return (
    <div className="events">
      <div className="container">
        <div className="events__title">Расписание и результаты</div>

        <div className="events-tabs">
          {tabsItems.map(({ name }, index) => (
            <button
              type="button"
              className={`events-tabs__item ${activeTabId === index ? 'active' : ''}`}
              key={name}
              onClick={() => setActiveTab(index)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="events__inner">

          {contentComponent(tabsItems, activeTabId)}
        </div>

        <div className="events__stages">
          <div className="events__title">Расписание и результаты</div>
          <div className="events-text">
            The path to every Major begins with the open qualifiers for the regional Minor Championships,
            spanning Europe, CIS, Americas, and Asia. <a className="events-text__link" href="#hereIs">Here is</a> the schedule of every qualifying stage of StarLadder Major.
          </div>
          
          <div className="events__registered">Зарегестрированно: <span>24</span></div>
        </div>

        <div className="events__wrapper">
          <div className="events__table">
            <UserTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
