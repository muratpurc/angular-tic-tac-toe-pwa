import { Injectable } from '@angular/core';
import { Engine } from 'tsparticles-engine';
import { loadConfettiPreset } from 'tsparticles-preset-confetti';
import { IParticlesOptions } from '../defines';

@Injectable({
  providedIn: 'root'
})

export class ParticlesService {

  private _options: IParticlesOptions = {
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

  get options(): IParticlesOptions {
    return this._options;
  }

  async init(engine: Engine): Promise<void> {
    await loadConfettiPreset(engine);
  }

}
