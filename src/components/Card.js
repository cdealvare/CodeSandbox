import React, { useState } from "react";

export default function Card({ card, flipCard }) {
  return (
    <div className="card" onClick={() => flipCard(card.id)}>
      <div
        className="card-inner"
        style={{ transform: card.flipped ? "rotateY(180deg)" : null }}
      >
        <div className="card-back">{card.value}</div>
        <div className="card-front">💚</div>
      </div>
    </div>
  );
}
