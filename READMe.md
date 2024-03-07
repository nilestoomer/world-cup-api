# World Cup API

The World Cup API has the has the entire squad of every World Cup winning team.

## What's in here?

This API has the following information:
- winningNation: The team who won the tournament
- finalOpponent: The second place team
- captain: The Captain of the team
- manager: The Squad Manager
- worldCupYear: The year the tournament was played(or supposed to be played)
- score: final score of the game
- highestGoalScorer: Highest scorer from that tournament
- extraTime: Says whether it went into extra time
- penalties: Says whether it went to penalties
- players: The entire sqaud of the winning team

### Endpoints

```
/teams
```
Get all World Cup Winning Teams

```
/teams/:id
```
Get team by ID

## Authors

[niles](https://github.com/nilestoomer)