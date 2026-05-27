import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gacha-sim';

  result = '???';
  lastTenPulls: string[] = [];
  ssrPool = ['Modernia', 'Liberalio', 'Cinderella'];
  srPool = ['Rapi', 'Anis', 'Neon'];
  rPool = ['Soldier EG', 'iDoll Sun', 'Product 12'];

  pullCount = 0;

  pullCharacter(isSingle: boolean) {
    this.pullCount++;

    const roll = Math.random() * 100;

    if (isSingle) {
      this.lastTenPulls = [];
    }

    if (roll <= 4) {
      const randomIndex = Math.floor(Math.random() * this.ssrPool.length);
      if (isSingle) {
        this.result = this.ssrPool[randomIndex];
      } else {
        this.lastTenPulls.push(this.ssrPool[randomIndex]);
      }
    } else if (roll <= 47) {
      const randomIndex = Math.floor(Math.random() * this.srPool.length);
      if (isSingle) {
        this.result = this.srPool[randomIndex];
      } else {
        this.lastTenPulls.push(this.srPool[randomIndex]);
      }
    } else {
      const randomIndex = Math.floor(Math.random() * this.rPool.length);
      if (isSingle) {
        this.result = this.rPool[randomIndex];
      } else {
        this.lastTenPulls.push(this.rPool[randomIndex]);
      }
    }

    //console.log(this.lastTenPulls);
  }

  pullTenCharacters() {
    this.lastTenPulls = [];

    for (let i = 0; i < 10; i++) {
      this.pullCharacter(false);
    }
  }
}
