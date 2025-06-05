// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const updateMatchCard = {
    umpires: matchCard.umpires,
    result: matchCard.result,
    manOfTheMatch: matchCard.man_of_the_match,
    id: matchCard.id,
    date: matchCard.date,
    venue: matchCard.venue,
    competingTeam: matchCard.competing_team,
    competingTeamLogo: matchCard.competing_team_logo,
    firstInnings: matchCard.first_innings,
    secondInnings: matchCard.second_innings,
    matchStatus: matchCard.match_status,
  }
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = updateMatchCard
  const color = matchStatus === 'Lost' ? 'lost' : 'won'
  return (
    <li className="match-bg">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-img"
      />
      <p className="isk">{competingTeam}</p>
      <p className="pp">{result}</p>
      <p className={color}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
