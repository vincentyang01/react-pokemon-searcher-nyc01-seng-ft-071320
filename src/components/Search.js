import React from 'react'

class Search extends React.Component {

  state = {
    search: ""
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(() => ({ search: e.target.value }), () => {
      console.log("Rendering chars", this.state.search)
      // debugger
      this.props.searchHandler(this.state.search)})
  }

  render(){
    // console.log("What are the this.props in search?", this.props)
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" value={this.props.value} onChange={this.changeHandler}/>
          <i className="search icon" />
        </div>
      </div>
    )
  }

}


export default Search
