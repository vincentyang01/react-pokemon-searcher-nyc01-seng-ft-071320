import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  search = () => {
    console.log("For search! ", this.props.search)
  }

  pokemon = () => {
    return this.props.pokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
  }
  
  render() {
    console.log("PokemonCollection - Data was passed down: ", this.props.pokemon)
    console.log("Back in pokemon collection: ", this.props.changeHandler)
    return (
      <Card.Group itemsPerRow={6}>
        {this.pokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
