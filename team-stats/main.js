/*
Team Stats

We want to create and extract information about your favorite sports team.
Basketball, soccer, tennis, or water polo, you pick it. 
It’s your job to create data using the JavaScript data structures 
at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures 
as well as gain insights from them. For example, 
you might want to get the total number of 
games your team has played, or the average score of all 
of their games.
*/

const team = {
  _players: [
    {
      nickname: 'Faker',
      position: 'Mid',
      age: 24
    },
    {
      nickname: 'Cuzz',
      position: 'Junggle',
      age: 22
    },
    {
      nickname: 'Canna',
      position: 'Top',
      age: 20
    },
    {
      nickname: 'Teddy',
      position: 'AD',
      age: 23
    },
    {
      nickname: 'Effort',
      position: 'Support',
      age: 21
    },
  ],
  _games: [
    {
      opponent: 'Gen G',
      teamPoints: 2,
      opponentPoints: 1
    },
    {
      opponent: 'KT Rollster',
      teamPoints: 2,
      opponentPoints: 0
    },
    {
      opponent: 'Dragon X',
      teamPoints: 2,
      opponentPoints: 0
    },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(nickname, position, age) {
    let player = {
      nickname,
      position,
      age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this._games.push(game);
  }
};


// test
team.addPlayer('Clid', 'Junggle', 22);
console.log(team.players);

team.addGame('Afreeca Freecs', 2, 1);
console.log(team.games);