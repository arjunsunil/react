import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name:'arju', age: 27},
      {name: 'devu', age: 24},
      {name:'siva', age:15}
    ]
  }

  switchNameHandler = (newName) =>{
      this.setState({
        persons : [
          {name:newName, age: 27},
          {name: 'devayani', age: 24},
          {name:'sivakrishna', age:15}
        ]
      }
    )
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons : [
        {name:'arjun', age: 27},
        {name: event.target.value, age: 24},
        {name:'sivakrishna', age:15}
      ]
    }
  )
}


  render() {
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }
    return (
      <div className="App">
       <h1>Hi, I'ma React App</h1>
       <button 
          style = {style}
          onClick={() => this.switchNameHandler('arjun')}> Switch Name
      </button>
       <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'arj111un')}>
          My Hobbies: Playing Cricket
      </Person>
      <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, '123')}
          changed={this.nameChangedHandler}>
      </Person>
      <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, '1ddd')}>
      </Person>
      </div>
    );
  }
}

export default App;
