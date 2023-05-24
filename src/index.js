import './style.css';
import ScoreBoard from './modules/scoreboard.js';
import createScore from './modules/createscore.js';

const scores = new ScoreBoard();
const btnadd = document.getElementById('btnaddscore');
scores.showScores();

const btnrefresh = document.getElementById('btnrefresh');
btnadd.addEventListener('click', (e) => {
  e.preventDefault();
  createScore();
});

btnrefresh.addEventListener('click', () => {
  document.location.reload();
});