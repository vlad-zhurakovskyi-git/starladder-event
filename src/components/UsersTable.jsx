import React from 'react';
import Icon from './Icon';

const table = [
  {
    number: '1',
    flag: 'ua',
    user: 'Vlad Zhurakovskyi'
  }, {
    number: '2',
    flag: 'ua',
    user: 'Dianne Russell'
  }, {
    number: '3',
    flag: 'ua',
    user: 'Natus Vincere'
  }, {
    number: '4',
    flag: 'ua',
    user: 'Natus Vincere'
  }, {
    number: '5',
    flag: 'ua',
    user: 'Natus Vincere'
  }, {
    number: '6',
    flag: 'ua',
    user: 'Natus Vincere'
  }, {
    number: '7',
    flag: 'ua',
    user: 'Natus Vincere'
  }, {
    number: '8',
    flag: 'ua',
    user: 'Natus Vincere'
  }, {
    number: '999',
    flag: 'ua',
    user: 'Natus Vincere'
  },
];

const UserTable = ({ item }) => {
  return (
    <div className="table">
      <div className="table-header">
        <div className="table-header__col">#</div>
        <div className="table-header__col">Команда</div>
      </div>

      <div className="table-body">
        {table.map(({ number, flag, user }) => (
          <div className="table-body__row">
          <div className="table-body__number">{number}</div>
          <div className="table-body__user">
            <Icon name={`flag-${flag}`}/>
            {user}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTable;
