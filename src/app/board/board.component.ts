import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  @Output() newWinner = new EventEmitter<string|null>();
  _board: BoardService;

  constructor(board: BoardService) {
    this._board = board;
  }

  get board(): BoardService {
    return this._board;
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this._board.reset();
  }

  makeMove(idx: number): void {
    this.board.makeMove(idx);
    this.newWinner.emit(this.board.winner);
  }

  squareCssClass(pos: number): string {
    let value = this.board.winnerSquares.indexOf(pos) > -1 ? 'blink' : '';
    if (this.board.winner) {
      value += ' finished';
    }
    return value.trim();
  }

}
