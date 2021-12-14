import { Component, OnInit } from '@angular/core';
import {album} from "../interfaces/app-interface";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  album!: album;

  constructor() { }

  ngOnInit(): void {
  }

}
