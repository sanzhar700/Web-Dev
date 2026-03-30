import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  standalone: true,
  selector: 'app-albums',
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Albums</h2>

    <div *ngIf="loading">Loading...</div>

    <ul>
      <li *ngFor="let album of albums">
        <a [routerLink]="['/albums', album.id]">
          {{ album.id }} - {{ album.title }}
        </a>
        <button (click)="delete(album.id)">Delete</button>
      </li>
    </ul>
  `
})
export class Albums implements OnInit {

  albums: Album[] = [];
  loading = true;

  constructor(private service: AlbumService) {}

  ngOnInit(): void {
    this.service.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  delete(id: number) {
    this.service.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}