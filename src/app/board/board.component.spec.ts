import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardService } from '../services/board.service';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  const mockBoardService = jasmine.createSpyObj<BoardService>(['makeMove', 'reset']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [BoardComponent],
      providers: [{
        provide: BoardService,
        useValue: mockBoardService
      }]
    });
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
