import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    newCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    const newCapital = event.target.value

    this.setState({newCapitalId: newCapital})
  }

  newCountry = () => {
    const {newCapitalId} = this.state

    const newCountryName = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === newCapitalId,
    )

    return newCountryName.country
  }

  render() {
    const {newCapitalId} = this.state
    const countryName = this.newCountry(newCapitalId)

    return (
      <div className="home-container">
        <div className="display-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div>
            <select
              id="capital"
              type="select"
              className="capital-name"
              onChange={this.onChangeCapital}
              value={newCapitalId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capital" className="label-name">
              is capital of which country?
            </label>
          </div>
          <div className="country-container">
            <p className="country-name">{countryName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
