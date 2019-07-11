import { Component, OnInit } from '@angular/core';
import { Area } from '../area';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
  areas: Area[];

  ngOnInit() {
  }

}
