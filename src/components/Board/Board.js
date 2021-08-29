import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';

class Clock extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       date: new Date(),
       user: "U",
       users: [{name: "Johnnie", id: 1}, {name: "Justia", id: 2}]
     }
   }

setUser(event) {
  //this.state.user = "new u";
  //console.log(event.target)
  event.target.value = "new u"
}

showUsers() {
  return this.state.users.map((u) => 
    <li key = {u.id}> name = {u.name}</li>
  )
}

setTime() {
  this.date = new Date();
}

componentDidMount() {
  this.timerID = setInterval(      () => this.tick(),      1000    );
}

componentWillUnmount() {
  clearInterval(this.timerID)
}

tick(){
  this.setState({      date: new Date()    });
}

render() {
  return (
    <div>
      <ul>
      {this.showUsers()}
      </ul>
        <h1>Hello, {this.state.user}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <input type="text" onChange={this.setUser} />
        <button onClick={this.setUser}>Submit User</button>
      </div>
  )
}
// const Board = () => (
//   <div className="Board">
//     Board Component
//   </div>
// );
}

Clock.propTypes = {};

Clock.defaultProps = {};

export default Clock;
