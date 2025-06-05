// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updateLatestMatchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updateLatestMatchDetails
  return (
    <div className="last-bg">
      <div className="jsk">
        <p className="competing-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="p">{venue}</p>
        <p className="p">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="img"
      />
      <div className="oo">
        <h1 className="h1">First Innings</h1>
        <p className="p">{firstInnings}</p>
        <h1 className="h1">Second Innings</h1>
        <p className="p">{secondInnings}</p>
        <h1 className="h1">Man Of The Match</h1>
        <p className="p">{manOfTheMatch}</p>
        <h1 className="h1">Umpires</h1>
        <p className="p">{umpires}</p>y{' '}
      </div>
    </div>
  )
}

export default LatestMatch
