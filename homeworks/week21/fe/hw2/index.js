import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const boardSize = 19;

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function calculateWinner(squares) {
  const winLines = [
    [0, 19, 38, 57, 76],
    [1, 20, 39, 58, 77],
    [2, 21, 40, 59, 78],
    [3, 22, 41, 60, 79],
    [4, 23, 42, 61, 80],
    [0, 1, 2, 3, 4],
    [19, 20, 21, 22, 23],
    [38, 39, 40, 41, 42],
    [57, 58, 59, 60, 61],
    [76, 77, 78, 79, 80],
    [0, 20, 40, 60, 80],
    [4, 22, 40, 58, 76],
  ];

  for (let i = 0; i < 14; i += 1) {
    for (let j = 0; j < 14; j += 1) {
      const newWinLines = winLines.map((line) => {
        const newWinLine = line.map(item => item + (i * boardSize) + j);
        return newWinLine;
      });
      for (let k = 0; k < newWinLines.length; k += 1) {
        const [a, b, c, d, e] = newWinLines[k];
        if (
          squares[a]
          && squares[a] === squares[b]
          && squares[a] === squares[c]
          && squares[a] === squares[d]
          && squares[a] === squares[e]
        ) {
          return squares[a];
        }
      }
    }
  }
  return null;
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    let n = 0;
    const board = [];
    for (let i = 0; i < boardSize; i += 1) {
      const boardRow = [];
      for (let j = 0; j < boardSize; j += 1, n += 1) {
        boardRow.push(this.renderSquare(n));
      }
      board.push(<div className="board-row" key={i}>{boardRow}</div>);
    }
    return <div>{board}</div>;
  }
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(boardSize * boardSize).fill(null),
        x: null,
        y: null,
      }],
      stepNumber: 0,
      blackIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.blackIsNext ? '☻' : '○';
    this.setState({
      history: history.concat([{
        squares,
        x: i % boardSize,
        y: parseInt(i / boardSize),
      }]),
      stepNumber: history.length,
      blackIsNext: !this.state.blackIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      blackIsNext: !((step % 2)),
    });
  }

  render() {
    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move} (${step.x},${step.y})`
        : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });


    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player is： ${this.state.blackIsNext ? '黑子' : '白子'}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
