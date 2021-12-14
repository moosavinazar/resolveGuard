import { Component, OnInit } from '@angular/core';
import {album} from "../interfaces/app-interface";
import {AlbumsService} from "../albums.service";
import {ActivatedRoute, Data, Router} from "@angular/router";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  warningMessage!: string;
  album!: album;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe((res) => {
    //   let selectedId: number = +res['id'];
    //   setTimeout(() => {
    //     this.album = <album>this.albumService.albums.find(album => album.id === selectedId);
    //     if (!this.album) {
    //       this.router.navigate(['/notfound']);
    //     }
    //   }, 5000);
    // });

    this.route.data.subscribe((data: Data) => {
      this.album = data['album'];
    });

    this.warningMessage = this.route.snapshot.data['message'];
  }

}
