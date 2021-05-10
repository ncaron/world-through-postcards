import React from 'react';
import './Postcard.css';

export default ({country}) => {
  const cards = country.cards.map((card, i) => {
    const cardFrontSrc = require(`../../assets/cards/front/${card.images.front}`);
    const cardBackSrc = require(`../../assets/cards/back/${card.images.back}`);
    const cardFrontAlt = `${country.name} card front ${i}`;
    const cardBackAlt = `${country.name} card back ${i}`;

    return (
      <div className="postcard" key={i}>
        <p className="city">City: {card.city}</p>
        <span><img src={cardFrontSrc} alt={cardFrontAlt} /></span>
        { card.displayBack &&
          <span><img src={cardBackSrc} alt={cardBackAlt} /></span>
        }
        { card.insta &&
          <a className="insta" href={card.insta} target="_blank" rel="noopener noreferrer">View on Instagram</a>
        }
      </div>
    );
  });

  return (
    <div>
      {cards}
    </div>
  );
}
