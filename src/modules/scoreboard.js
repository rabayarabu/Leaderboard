class ScoreBoard {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/abcdefg/scores/';
  }

  clearInput() {
    this.name.value = '';
    this.score.value = '';
  }

  async addScores() {
    const user = this.name.value;
    const score = this.score.value;
    if (user === '' || score === '') {
      const allscores = document.getElementById('scorelist');
      allscores.innerHTML = 'please fill up the fields';
    }
    const details = {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'content-type': 'application/json',
      },
    };
    if (this.name && this.score) {
      await fetch(this.url, details).then((res) => res.json());
    }
    this.clearInput();
    this.showScores();
  }

  async getScores() {
    const res = await fetch(this.url);
    const scoredetails = await res.json();
    return scoredetails;
  }

  async showScores() {
    const scores = await this.getScores();
    const allscores = document.getElementById('scorelist');
    allscores.innerHTML = '';
    if (scores.result.length === 0) {
      const errormsg = document.createElement('p');
      errormsg.testContent = 'Please add score!';
      allscores.appendChild(errormsg);
    } else {
      scores.result
        .sort((a, b) => b.score - a.score)
        .forEach((score) => {
          allscores.innerHTML += `<li class="score">${score.user}: ${score.score}</li>`;
        });
    }
  }
}

export default ScoreBoard;