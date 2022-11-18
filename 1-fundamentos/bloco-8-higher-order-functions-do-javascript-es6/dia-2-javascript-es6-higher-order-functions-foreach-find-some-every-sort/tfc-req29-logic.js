const teams = [
  {
    id: 1,
    teamName: "Avaí/Kindermann"
  },
  {
    id: 2,
    teamName: "Bahia"
  },
  {
    id: 3,
    teamName: "Botafogo"
  },
  {
    id: 4,
    teamName: "Corinthians"
  },
  {
    id: 5,
    teamName: "Cruzeiro"
  },
  {
    id: 6,
    teamName: "Ferroviária"
  },
  {
    id: 7,
    teamName: "Flamengo"
  },
  {
    id: 8,
    teamName: "Grêmio"
  },
  {
    id: 9,
    teamName: "Internacional"
  },
  {
    id: 10,
    teamName: "Minas Brasília"
  },
  {
    id: 11,
    teamName: "Napoli-SC"
  },
  {
    id: 12,
    teamName: "Palmeiras"
  },
  {
    id: 13,
    teamName: "Real Brasília"
  },
  {
    id: 14,
    teamName: "Santos"
  },
  {
    id: 15,
    teamName: "São José-SP"
  },
  {
    id: 16,
    teamName: "São Paulo"
  }
];

const matches = [
  {
    home_team: 16,
    home_team_goals: 1,
    away_team: 8,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 9,
    home_team_goals: 1,
    away_team: 14,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 4,
    home_team_goals: 3,
    away_team: 11,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    home_team: 3,
    home_team_goals: 0,
    away_team: 2,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    home_team: 7,
    home_team_goals: 1,
    away_team: 10,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 5,
    home_team_goals: 1,
    away_team: 13,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 12,
    home_team_goals: 2,
    away_team: 6,
    away_team_goals: 2,
    in_progress: false,
  },
  {
    home_team: 15,
    home_team_goals: 0,
    away_team: 1,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 1,
    home_team_goals: 0,
    away_team: 12,
    away_team_goals: 3,
    in_progress: false,
  },
  {
    home_team: 2,
    home_team_goals: 0,
    away_team: 9,
    away_team_goals: 2,
    in_progress: false,
  },
  {
    home_team: 13,
    home_team_goals: 1,
    away_team: 3,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    home_team: 6,
    home_team_goals: 0,
    away_team: 4,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 8,
    home_team_goals: 2,
    away_team: 5,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 14,
    home_team_goals: 2,
    away_team: 16,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 10,
    home_team_goals: 0,
    away_team: 15,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 11,
    home_team_goals: 0,
    away_team: 7,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    home_team: 1,
    home_team_goals: 2,
    away_team: 8,
    away_team_goals: 3,
    in_progress: false,
  },
  {
    home_team: 12,
    home_team_goals: 4,
    away_team: 5,
    away_team_goals: 2,
    in_progress: false,
  },
  {
    home_team: 11,
    home_team_goals: 2,
    away_team: 2,
    away_team_goals: 2,
    in_progress: false,
  },
  {
    home_team: 7,
    home_team_goals: 0,
    away_team: 9,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 6,
    home_team_goals: 3,
    away_team: 13,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 4,
    home_team_goals: 3,
    away_team: 3,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 15,
    home_team_goals: 2,
    away_team: 16,
    away_team_goals: 3,
    in_progress: false,
  },
  {
    home_team: 10,
    home_team_goals: 2,
    away_team: 14,
    away_team_goals: 2,
    in_progress: false,
  },
  {
    home_team: 2,
    home_team_goals: 0,
    away_team: 6,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 13,
    home_team_goals: 1,
    away_team: 1,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    home_team: 5,
    home_team_goals: 1,
    away_team: 15,
    away_team_goals: 2,
    in_progress: false,
  },
  {
    home_team: 16,
    home_team_goals: 3,
    away_team: 7,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    home_team: 9,
    home_team_goals: 0,
    away_team: 4,
    away_team_goals: 4,
    in_progress: false,
  },
  {
    home_team: 3,
    home_team_goals: 0,
    away_team: 12,
    away_team_goals: 4,
    in_progress: false,
  },
  {
    home_team: 8,
    home_team_goals: 2,
    away_team: 10,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    home_team: 14,
    home_team_goals: 5,
    away_team: 11,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 1,
    home_team_goals: 1,
    away_team: 16,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 9,
    home_team_goals: 3,
    away_team: 6,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 10,
    home_team_goals: 1,
    away_team: 5,
    away_team_goals: 3,
    in_progress: false,
  },
  {
    home_team: 2,
    home_team_goals: 0,
    away_team: 7,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 15,
    home_team_goals: 0,
    away_team: 13,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 14,
    home_team_goals: 2,
    away_team: 4,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 3,
    home_team_goals: 2,
    away_team: 11,
    away_team_goals: 0,
    in_progress: false,
  },
  {
    home_team: 12,
    home_team_goals: 4,
    away_team: 8,
    away_team_goals: 1,
    in_progress: false,
  },
  {
    home_team: 16,
    home_team_goals: 2,
    away_team: 9,
    away_team_goals: 0,
    in_progress: true,
  },
  {
    home_team: 6,
    home_team_goals: 1,
    away_team: 1,
    away_team_goals: 0,
    in_progress: true,
  },
  {
    home_team: 11,
    home_team_goals: 0,
    away_team: 10,
    away_team_goals: 0,
    in_progress: true,
  },
  {
    home_team: 7,
    home_team_goals: 2,
    away_team: 15,
    away_team_goals: 2,
    in_progress: true,
  },
  {
    home_team: 5,
    home_team_goals: 1,
    away_team: 3,
    away_team_goals: 1,
    in_progress: true,
  },
  {
    home_team: 4,
    home_team_goals: 1,
    away_team: 12,
    away_team_goals: 1,
    in_progress: true,
  },
  {
    home_team: 8,
    home_team_goals: 1,
    away_team: 14,
    away_team_goals: 2,
    in_progress: true,
  },
  {
    home_team: 13,
    home_team_goals: 1,
    away_team: 2,
    away_team_goals: 1,
    in_progress: true,
  }
];

const oneMatch = {
  home_team: 16,
  home_team_goals: 1,
  away_team: 8,
  away_team_goals: 1,
  in_progress: false,
}

const expectedOutput = {
  "name": "Palmeiras",
  "totalPoints": 13,
  "totalGames": 5,
  "totalVictories": 4,
  "totalDraws": 1,
  "totalLosses": 0,
  "goalsFavor": 17,
  "goalsOwn": 5,
  "goalsBalance": 12,
  "efficiency": 86.67
}

// console.log(matches);

// const filterMatches = matches.filter((match) => (!match.in_progress)); // remove as partidas em andamento da tabela

// console.log(filteredMatches);

// const filterHomeTeam = (id) => filterMatches.filter((match) => (match.home_team === id)); // filtra pelo id do homeTeam

// console.log(filterHomeTeam);

const findTeamById = (id, teams) => { // busca um time pelo id e retorna o nome
  const team = teams.find((team) => team.id === id);
  return team.teamName;
}

// console.log(findTeamById(2, teams));

const gatherInfo = (matchList) => { // gera informações para popular objeto conforme solicitado
  const myTeam = {
    name: 0,
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0
  }

  matchList.forEach((match) => {
    myTeam.totalGames += 1;
    myTeam.goalsFavor += match.home_team_goals;
    myTeam.goalsOwn += match.away_team_goals;

    if (match.home_team_goals > match.away_team_goals) myTeam.totalVictories += 1;
    if (match.home_team_goals === match.away_team_goals) myTeam.totalDraws += 1;
    if (match.home_team_goals < match.away_team_goals) myTeam.totalLosses += 1;
  });

  myTeam.name = matchList[0].home_team;
  myTeam.totalPoints = (3 * myTeam.totalVictories) + myTeam.totalDraws;
  myTeam.goalsBalance = myTeam.goalsFavor - myTeam.goalsOwn;
  myTeam.efficiency = Number(((myTeam.totalPoints / (myTeam.totalGames * 3)) * 100).toFixed(2));

  myTeam.name = findTeamById(myTeam.name, teams)

  return myTeam;
};

const homeTeamLeaderboardGenerate = (matches) => {
  let result = [];
  const filterMatches = matches.filter((match) => (!match.in_progress)); // remove as partidas em andamento da tabela
  const filterHomeTeam = (id) => filterMatches.filter((match) => (match.home_team === id)) // filtra pelo id do homeTeam

  for (let i = 1; i <= 16; i++) {
    result = [...result, gatherInfo(filterHomeTeam(i))]
  }

  return result;
}

const orderTeams = (b, a) => { // ordena lista de times conforme solicitado  
  let cmp = a['totalPoints'] - b['totalPoints'];
  if (cmp === 0) { // somente se pontuação é igual, compara vitórias
    cmp = a['totalVictories'] - b['totalVictories'];
  }
  if (cmp === 0) { // somente vitórias é igual, compara saldo de gols
    cmp = a['goalsBalance'] - b['goalsBalance'];
  }
  if (cmp === 0) { // se saldo de gols é igual, compara gols feitos
    cmp = a['goalsFavor'] - b['goalsFavor'];
  }
  return cmp;
}

const homeTeamLeaderboard = homeTeamLeaderboardGenerate(matches);

homeTeamLeaderboard.sort(orderTeams);

console.log(homeTeamLeaderboard);

// console.log(gatherInfo(filterHomeTeam(1)));



