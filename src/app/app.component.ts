import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GachaComponent } from './features/gacha-system/gacha.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, GachaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
