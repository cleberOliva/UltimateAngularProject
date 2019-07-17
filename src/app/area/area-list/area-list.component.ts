import { Component, OnInit } from '@angular/core';
import { Area } from '../area.model';
import { AreaService } from '../area.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
  areas: Area[] = [];
  private areaId: number;

  constructor(
    private areaService: AreaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.areaService.getAll().subscribe(
      (data: Area[]) => {
        this.areas = data;
      },
      error => console.log(error)
    );

  }

  onAlterar(id: number){
    this.router.navigate(["/area/update", id]);
  }

  onDelete(id: number){
    this.areaService.delete(id).subscribe();
  }

  filterBy(prop: string) {
    return this.areas.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
