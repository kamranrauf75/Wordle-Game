import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import axios from 'axios';

class Square extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value : ''};
    }
  
  
    render() {
      return (
        <div className="letter-box-gray">{this.state.value}</div>
      );
    }
}
class Maker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
    }
 
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      return this.state.value;
    }
    async getWord() {

        await axios.get("https://random-word-api.herokuapp.com/word?length=5")
        .then((result) => {
            return result.data;
        })
       
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Guess:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }





class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {words : Array(30).fill('')};
      }
  
    renderSquare() {
      return <Square value = {this.state.words[0]}/>;
    }
  
    render() {
  
      return (
        <div className="game-board">
          <div className="letter-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
          </div>
          <div className="letter-row">
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
          </div>
          <div className="letter-row">
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
          </div>
          <div className="letter-row">
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
          </div>
          <div className="letter-row">
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
          </div>
          <div className="letter-row">
            {this.renderSquare(25)}
            {this.renderSquare(26)}
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
          </div>
        </div>
      );
    }
}


class Game extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        wordslist :  Array(30).fill(null),
       
      }
      console.log(this.state.word)
    }

    render() {  
      return (
          <div>
              Game <Board />
              Guess <Maker />
          </div>
      );

    }
  }

export default Game;

// class Square extends React.Component {

//     constructor(props) {

//       super(props);
//       this.state = { value : null };

//     }
//   render() {
//     return (
//       <button 
//         className="square"
        
//         onClick = { ()=> { this.props.onClick() } } >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// class Board extends React.Component {
  
//   constructor(props) {
//     super(props);

//     this.state = { 
//       squares: Array(36).fill(null), 
//       xIsNext : true
//     };

//   }
  
  
//   renderSquare(i) {
//     return <Square 
//       value = {this.state.squares[i]} 
//       onClick = { () => this.handleClick(i)}
//       />;
//   }

//   handleClick(i) {

//     const squaresUpdated = this.state.squares.slice();

//     squaresUpdated[i] = this.state.xIsNext ? 'X' : 'O';

//     //squaresUpdated[i] = 'X';
//     this.setState({
//         squares : squaresUpdated,
//         xIsNext : !this.state.xIsNext});
//   }


//   render() {
//     const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}

//         </div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

// export default Game;