// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard/index'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {iplCardList: [], isLoading: true}

  componentDidMount() {
    this.getCardList()
  }

  getCardList = async () => {
    console.log('ins')
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    const updateData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplCardList: updateData, isLoading: false})
  }

  render() {
    const {iplCardList, isLoading} = this.state
    return (
      <div className="bg">
        {isLoading ? (
          <div className="bg">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="ipl-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="ipl-heading">IPL Dashboard</h1>
            </div>
            <ul>
              {iplCardList.map(eachItem => (
                <TeamCard teamCard={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
