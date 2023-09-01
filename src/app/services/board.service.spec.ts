import { TestBed } from '@angular/core/testing';
import { BoardService } from './board.service';
import { Shape } from '../defines';

describe('BoardService', () => {
  let service: BoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('initial player is X', () => {
    expect(service.player).toBe(Shape.X);
  });

  it('player O is next after one move', () => {
    // Player X makes always the first move
    service.makeMove(0);
    expect(service.player).toBe(Shape.O);
  });

  it('moves (fields 0, 1, 2) with X as winner', () => {
    // X plays fields 0, 1, 2
    // O plays fields 3, 4
    service.makeMove(0); // X
    service.makeMove(3); // O
    service.makeMove(1); // X
    service.makeMove(4); // O
    service.makeMove(2); // X
    
    expect(service.winner).toBe(Shape.X);
  });
});
