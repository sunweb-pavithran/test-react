import React, {Component} from 'react';
import Table from './Table'
import Navbar from './Navbar'
import Form from './Form'

class App extends Component {
      state = {
        characters: [
            
        ],
    }
    render() { 
        const {characters} = this.state    
        return (
            <div className="App">
                <Navbar/>
                <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                  <div className="row">
                    <div className="col-md-6">
                      <Form handleSubmit={this.handleSubmit}/>
                    </div>
                  </div>                
                </div>
            </div>
        )
    }

    removeCharacter = index => {
      const {characters} = this.state

      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index
        }),
      })
    }

    handleSubmit = character => {
      this.setState({characters: [...this.state.characters, character]})
    }
}

export default App