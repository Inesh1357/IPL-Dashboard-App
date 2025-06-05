// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCard} = props
  const {id, name, teamImageUrl} = teamCard
  return (
    <Link className="link-ipl" to={`/team-matches/${id}`}>
      <li className="li-team">
        <img src={teamImageUrl} alt={name} className="team-name" />
        <p className="team-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
