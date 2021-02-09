import React from 'react';
import Icon from './Icon';

const RenderLinkLive = ({ link}) => {
  return (
    <a className="card__link" href={link}>
      <Icon name="play"/>
      Watch live
    </a>
  );
};

const RenderDateTime = ({ date, time}) => {
  return (
    <div className="card-date">
      <div className="card-date__time">{time}</div>
      <div className="card-date__number">{date}</div>
    </div>
  );
};

const RenderMatchesCard = ({ data, isFinishMatches, isFinish, isUpcoming }) => {
  const { teams, system, timer, partner, score } = data;

  return (
    <>
      <div className="card__main">
          <div className="card__wrapper">
            <div className="card__logos">
              <img className="card__team-logo" src={`/images/teams/${teams[0].logo}.png`} alt={teams[0].logo}/>
              <img className="card__team-logo" src={`/images/teams/${teams[1].logo}.png`} alt={teams[1].logo}/>
            </div>
            <div className="card__inner">
              <div className="card__team-name">{teams[0].name}</div>
              {isFinish ?
                <div className="card__team-name">{teams[0].score}</div> :
                <button type="button" className="card__outcome">{teams[0].outcome}</button>
              }
            </div>
            <div className={`card__inner ${isFinishMatches ? 'card__inner_modify' : ''}`}>
              <div className="card__team-name">{teams[1].name}</div>
              {isFinish ?
                <div className="card__team-score">{teams[1].score}</div> :
                <button type="button" className="card__outcome">{teams[1].outcome}</button>
              }
            </div>
          </div>
      </div>

      <div className="card-footer">
        <div className="card-footer__text">
          {isFinish ? score : <>{isUpcoming && <>Starts in: {timer} •</>} {system}</>}
        </div>

        <img className="card-footer__partner" src={`/images/${partner}.png`} alt="ggbet"/>
      </div>
    </>
  )
};

const RenderBattlesCard = ({ data, isFinish, isUpcoming }) => {
  const { groups, matchNumber, winner, map, timer} = data;

  return (
    <>
      <div className="card__main">
        <div className="card__wrapper">
          <img className="card__discipline" src="/images/teams/discipline.svg" alt="discipline"/>
          <div className="card__position">
            <div className="card__groups">
                <div className="card__team-name">{groups[0].name}</div>
                <div className="card__team-name">{groups[1].name}</div>
            </div>

            <button type="button" className="card__matches">Match {matchNumber}</button>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="card-footer__text">
          {isFinish ?
            <>
              <Icon name="winner-cup"/> {winner}
            </> :
            <>{isUpcoming && <>Starts in: {timer} •</>} Map: {map}</>
          }
        </div>
      </div>
    </>
  )
};

const Card = ({ item }) => {
  if (!item) return null;

  const {
    tournamentName,
    cardTab,
    status,
    link,
    time,
    date,
  } = item;

  const isLive = status === 'live';
  const isFinish = status === 'finish';
  const isUpcoming = status === 'upcoming';
  const isMatches = cardTab === 'matches';
  const isFinishMatches = isMatches && status === 'finish';

  return (
    <div className={`card card_${status}`}>
      <div className="card__tournament">{tournamentName}</div>
      {isLive ? <RenderLinkLive link={link}/> : <RenderDateTime time={time} date={date}/>}
      {isMatches ?
        <RenderMatchesCard
          data={item}
          isFinishMatches={isFinishMatches}
          isFinish={isFinish}
          isUpcoming={isUpcoming}
        /> : <RenderBattlesCard
          data={item}
          isFinish={isFinish}
          isUpcoming={isUpcoming}
        />
      }
    </div>
  );
};

export default Card;
