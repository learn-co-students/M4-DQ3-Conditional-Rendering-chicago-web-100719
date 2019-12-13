import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

state = {
  selected: "profile"
}

handleClick = (event) =>{
  this.setState({selected: event.target.id})
}

  render() {

    let detailsToDisplay 

    switch (this.state.selected){
      case "profile":
        detailsToDisplay  = <Profile />
        break;
      case "photo":
        detailsToDisplay  = <Photos />
        break;
      case "cocktail":
        detailsToDisplay  = <Cocktails />
        break;
      case "pokemon":
        detailsToDisplay  = <Pokemon />
        break;
      default:
        detailsToDisplay = null
        break;
    }

    return (
      <div>
        <MenuBar handleClick={this.handleClick} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
