import { Component, OnInit } from '@angular/core';
import { Area } from '../area.model';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
  areas: Area[];

  constructor(private areaService: AreaService) { }
  ngOnInit() {

    this.areaService.getAll().subscribe(
      (data: Area[]) => {
        this.areas = data;
      },
      error => console.log(error)
    );
  }

}
