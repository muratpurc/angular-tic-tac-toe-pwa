import { Component } from '@angular/core';
import { ParticlesService } from './services/particles.service';
import { Nullable } from './defines';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Tic Tac Toe';
  particles: ParticlesService;
  winner: Nullable<string>;

  constructor(particles: ParticlesService) {
    this.particles = particles;
  }

  winnerChange($event: Nullable<string>): void {
    this.winner = $event;
  }

};
