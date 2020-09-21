import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: this.props.pokemon.sprites.front,
    back: this.props.pokemon.sprites.back,
    clicked: true
  }

  // flipCard = (selectedDiv) => {
  //   console.log("Made it to flipcard", selectedDiv)
  //   if(selectedDiv.src === this.state.front){
  //     selectedDiv = this.state.back
  //     console.log("Inside the if",selectedDiv, this.state.back)
  //   } else {
  //     selectedDiv = this.state.front
  //   }
  // }

  changeClicked = () => {
    if(this.state.clicked === true) {
      this.setState({ clicked: false })
    } else {
      this.setState({ clicked: true })
    }
  }
  
  render() {
    
    // console.log("PokemonCard - We are getting data...", this.props.pokemon)
    return (
      <Card>
        <div>
          <div className="image">
            {this.state.clicked 
              ? <img alt={this.props.pokemon.name} src={this.state.front} onClick={this.changeClicked}/>
              : <img alt={this.props.pokemon.name} src={this.state.back} onClick={this.changeClicked}/>
            }
          </div>
          <div className="content">
          <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
