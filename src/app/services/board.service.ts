import { Injectable } from '@angular/core';
import { Shape, Nullable } from '../defines';

@Injectable({
  providedIn: 'root'
})

export class BoardService {

  private _lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  private _squares: Array<string>;
  private _xIsNext: boolean;
  private _winnerSquares: Array<number>;
  private _winner: Nullable<string>;

  constructor() {
    this.reset();
  }

  reset(): void {
    this._squares = Array(9).fill(null);
    this._winnerSquares = [];
    this._xIsNext = true;
    this._winner = null;
  }

  get squares(): Array<string> {
    return this._squares;
  }

  get winner(): Nullable<string> {
    return this._winner;
  }

  get winnerSquares(): Array<number> {
    return this._winnerSquares;
  }

  get player(): string {
    return this._xIsNext ? Shape.X : Shape.O;
  }

  makeMove(idx: number): void {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this._xIsNext = !this._xIsNext;
    }

    this._winner = this.calculateWinner();
  }

  calculateWinner(): Nullable<string> {
    for (let i = 0; i < this._lines.length; i++) {
      const [a, b, c] = this._lines[i];
      if (
        this._squares[a] &&
        this._squares[a] === this._squares[b] &&
        this._squares[a] === this._squares[c]
      ) {
        this._winnerSquares = [a, b, c];
        return this._squares[a];
      }
    }
    return null;
  }

}
