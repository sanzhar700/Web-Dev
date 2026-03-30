import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  standalone: true,
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div *ngIf="album">
      <h2>Album Details</h2>

      <p><strong>ID:</strong> {{ album.id }}</p>
      <p><strong>User ID:</strong> {{ album.userId }}</p>

      <label>Title:</label>
      <input [(ngModel)]="album.title">

      <br><br>

      <button (click)="save()">Save</button>
      <button [routerLink]="['/albums', album.id, 'photos']">View Photos</button>
      <button (click)="back()">Back</button>
    </div>
  `
})
export class AlbumDetail implements OnInit {

  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAlbum(id).subscribe(data => {
      this.album = data;
    });
  }

  save() {
    this.service.updateAlbum(this.album).subscribe();
  }

  back() {
    this.router.navigate(['/albums']);
  }
}