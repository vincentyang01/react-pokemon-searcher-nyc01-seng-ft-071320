import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    id: undefined,
    name: '',
    hp: undefined,
    front: '',
    back: ''
  }

  changeHandler = (e) => {
    e.persist()
    this.setState({ [e.target.name]: e.target.value })
  }

  submitting = (e) => {
    e.preventDefault()
    let obj = {
      id: this.state.id,
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.front,
        back: this.state.back
      }
    }
    this.props.create(obj)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitting}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp || undefined} onChange={this.changeHandler}/>
            <Form.Input fluid label="Front Image URL" placeholder="Front" name="front" value={this.state.front} onChange={this.changeHandler}/>
            <Form.Input fluid label="Back Image URL" placeholder="Back" name="back" value={this.state.back} onChange={this.changeHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
