import ScoreBoard from './scoreboard.js';

const createScore = () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  const newleader = new ScoreBoard(name, score);
  newleader.addScores();
};

export default createScore;