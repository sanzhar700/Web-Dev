import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo';

@Component({
  standalone: true,
  selector: 'app-album-photos',
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Album Photos</h2>

    <div class="grid">
      <div *ngFor="let photo of photos">
        <img [src]="photo.thumbnailUrl">
        <p>{{ photo.title }}</p>
      </div>
    </div>

    <button [routerLink]="['/albums', albumId]">Back</button>
  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 10px;
    }
    img {
      width: 100%;
      border-radius: 8px;
    }
  `]
})
export class AlbumPhotos implements OnInit {

  photos: Photo[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private service: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAlbumPhotos(this.albumId)
      .subscribe(data => this.photos = data);
  }
}