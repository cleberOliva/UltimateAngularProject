import { Component, OnInit } from '@angular/core';
import { MachineService } from '../machine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Machine } from '../machine.model';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {
  machines: Machine[];

  constructor(
    private machineService: MachineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.machineService.getAll().subscribe(
      (data: Machine[]) => {
        this.machines = data;
      }, error => console.error(error)
    );
  }

  
  onUpdate(id: number){
    this.router.navigate(["/machine/update", id]);
  }
  
  onRemove(id: number){
    this.machineService.delete(id).subscribe();
  }
}
