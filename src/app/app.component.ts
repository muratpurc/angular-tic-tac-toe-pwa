import { Component } from '@angular/core';
import { ParticlesService } from './services/particles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Tic Tac Toe';
  particles: ParticlesService;
  winner: string|null;

  constructor(particles: ParticlesService) {
    this.particles = particles;
  }

  winnerChange($event: string|null): void {
    this.winner = $event;
  }

};
