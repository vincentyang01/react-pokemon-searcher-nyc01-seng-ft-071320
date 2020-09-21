import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemonArray: [],
    search: '',
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => this.setState({ pokemonArray: data }))
  }

  searchHandler = (input) => {
    this.setState({ search: input })
  }

  renderSearch = () => {
    return this.state.pokemonArray.filter(pokemon => pokemon.name.includes(this.state.search))
  }
  

  create = (obj) => {
    console.log("Submitting?", obj)
    const options = {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
    body: JSON.stringify(obj)
    }
  fetch("http://localhost:3000/pokemon", options)
  .then(res => res.json())
  .then(res => {
    console.log("This is the response: ", res)
    let newArr = [obj, ...this.state.pokemonArray]
    this.setState({ pokemonArray: newArr })
  })
  }

  render() {
    console.log("Pokemon Page, are we getting data?", this.state.pokemonArray)
    console.log("What is state.search?: ", this.state.search)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm create={this.create}/>
        <br />
        <Search searchHandler={this.searchHandler}/>
        <br />
        <PokemonCollection pokemon={this.renderSearch()} search={this.state.search} changeHandler={this.changeHandler}/>
      </Container>
    )
  }
}

export default PokemonPage
