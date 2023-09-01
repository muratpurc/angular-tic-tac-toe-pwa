import { Injectable } from '@angular/core';
import { Engine } from 'tsparticles-engine';
import { loadConfettiPreset } from 'tsparticles-preset-confetti';

@Injectable({
  providedIn: 'root'
})

export class ParticlesService {

  private _options: any = {
    preset: "confetti",
    emitters: {
      startCount: 60,
      life: {
        duration: 2,
        count: 1
      },
      position: {
        x: 90,
        y: 10
      },
    }
  };

  get options(): any {
    return this._options;
  }

  async init(engine: Engine): Promise<void> {
    await loadConfettiPreset(engine);
  }

}
