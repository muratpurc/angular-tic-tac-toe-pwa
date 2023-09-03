import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BoardService } from '../services/board.service';
import { Nullable } from '../defines';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  @Output() newWinner = new EventEmitter<Nullable<string>>();
  _board: BoardService;
  _winner: Nullable<string>;

  constructor(board: BoardService) {
    this._board = board;
    this._winner = this._board.winner;
  }

  get board(): BoardService {
    return this._board;
  }

  set winner(newWinner: Nullable<string>) {
    if (this._winner !== newWinner) {
      this._winner = newWinner;
      this.newWinner.emit(this._winner);
    }
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this._board.reset();
    this.winner = this.board.winner;
  }

  makeMove(idx: number): void {
    this.board.makeMove(idx);
    this.winner = this.board.winner;
  }

  squareCssClass(pos: number): string {
    let value = this.board.winnerSquares.indexOf(pos) > -1 ? 'blink' : '';
    if (this.board.winner) {
      value += ' finished';
    }
    return value.trim();
  }

}
