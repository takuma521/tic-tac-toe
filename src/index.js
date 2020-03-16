import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className={`square ${props.isHighlight ? 'highlight' : ''}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    const isHighlight = this.props.winLines.some(winCell => winCell === i);
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
        isHighlight={isHighlight}
      />
    );
  }

  render() {
    const board = Array(3).fill(null)
    const row = Array(3).fill(null)
    return (
      <div>
        {board.map((board, boardIndex) => {
          return (
            <div className="board-row" key={boardIndex}>
              {row.map((row, rowIndex) => {
                return this.renderSquare(boardIndex * 3 + rowIndex)
              })}
            </div>
          )
        })}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        col: null,
        row: null,
      }],
      stepNumber: 0,
      xIsNext: true,
      isAsc: true,
      result: {
        xWin: 0,
        oWin: 0,
        draw: 0,
      },
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(current.squares).winner;
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        col: (i % 3) + 1,
        row: Math.floor(i / 3) + 1,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2 ) === 0,
    });
  }

  toggleAsc() {
    this.setState({
      isAsc: !this.state.isAsc,
    });
  }

  startNextGame(winner) {
    this.setState({
      history: [{
        squares: Array(9).fill(null),
        col: null,
        row: null,
      }],
      stepNumber: 0,
      xIsNext: true,
    });
    this.countWin(winner);
  }

  countWin(winner) {
    if (winner === 'X') {
      this.setState({
        result: {
          xWin: this.state.result.xWin + 1,
          oWin: this.state.result.oWin,
          draw: this.state.result.draw,
        },
      });
    } else if (winner === 'O') {
      this.setState({
        result: {
          xWin: this.state.result.xWin,
          oWin: this.state.result.oWin + 1,
          draw: this.state.result.draw,
        },
      });
    } else {
      this.setState({
        result: {
          xWin: this.state.result.xWin,
          oWin: this.state.result.oWin,
          draw: this.state.result.draw + 1,
        },
      });
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares).winner;

    const moves = history.map((step, move) => {
      const btnClass = this.state.stepNumber === move ? 'bold' : '';
      const desc = move ?
        `Go to move #${move} [${step.col}, ${step.row}]` :
        'Go to game start';
      return (
        <li key={move}>
          <button className={btnClass} onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status = {
      text: null,
      gameIsOver: false,
    };
    if (winner) {
      status.text = `Winner: ${winner}`;
      status.gameIsOver = true;
    } else if(current.squares.every((square) => square)) {
      status.text = 'Draw';
      status.gameIsOver = true;
    } else {
      status.text = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winLines={winner ? calculateWinner(current.squares).winLines : []}
          />
        </div>
        <div className="game-info">
          <div className={'result'}>{`${this.state.result.xWin} - ${this.state.result.draw} - ${this.state.result.oWin}`}</div>
          <div className={'result-name'}>X - Draw - O</div>
          <div>{status.text}</div>
          <button onClick={() => this.toggleAsc()}>
            <span className={this.state.isAsc ? 'bold' : ''}>ASC</span>←→<span className={this.state.isAsc ? '' : 'bold'}>DESC</span>
          </button>
          <button onClick={() => this.startNextGame(winner)} disabled={!status.gameIsOver}>Next game</button>
          <ol>{this.state.isAsc ? moves : moves.reverse()}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winLines: [a, b, c],
      };
    }
  }
  return [null];
}
