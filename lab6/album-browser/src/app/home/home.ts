import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <h1>Album Browser</h1>
    <p>Angular Routing & HTTP Lab</p>
    <button routerLink="/albums">Browse Albums</button>
  `
})
export class Home {}