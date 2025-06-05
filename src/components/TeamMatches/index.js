// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchDetails: [], bg: '', isLoading: true}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updataData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    console.log(updataData)
    this.setState({teamMatchDetails: updataData, bg: id, isLoading: false})
  }

  render() {
    const {teamMatchDetails, bg, isLoading} = this.state
    const {latestMatchDetails, teamBannerUrl, recentMatches} = teamMatchDetails
    console.log(latestMatchDetails)
    console.log('ins')
    return (
      <div>
        {isLoading ? (
          <div className="bg">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={bg}>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="teamBannerUrl"
            />
            <p className="last">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul>
              {recentMatches.map(eachItem => (
                <MatchCard matchCard={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
