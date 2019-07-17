import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/alert';
import { AreaService } from '../area.service';
import { AuthUtilService } from 'src/app/auth/auth-util.service';
import { Area } from '../area.model';
import { Soil } from '../soil.model';

@Component({
  selector: 'app-area-forms',
  templateUrl: './area-forms.component.html',
  styleUrls: ['./area-forms.component.css']
})
export class AreaFormsComponent implements OnInit {
  areaForm: FormGroup;
  soil: Soil[];
  idSoil: number;
  isEdit: boolean = false;
  private _id: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authUtil: AuthUtilService,
    private alertService: AlertService,
    private areaService: AreaService,
    private route: ActivatedRoute
  ) {
    if (!authUtil.isLogged()){
      this.alertService.error("Você precisa estar logado para acessar essa página!");
      this.router.navigate(["/index"]);
    }
    this.areaService.getSoil().subscribe(
      (data: Soil[]) => {
        this.soil = data;
      }, error => console.error(error)
    );
  }

  ngOnInit() {
    this.areaForm = this.formBuilder.group({
      description: ["", Validators.required],
      geometry: ["", Validators.required]
      // soil: ["", Validators.required]
    });

    this.route.paramMap.subscribe(param => {
      const value = param.get("id");
      if(value){
        this.isEdit = true;
        this.areaService.getAreaById(parseInt(value)).subscribe(
          (area: Area) => {
            this._id = parseInt(value);
            this.areaForm.patchValue({
              description: area.description,
              geometry: area.geometry
              // soil: area.soil.id
            });
            console.log(area);
          }, error => console.error(error)
        );
      }
    });
  }

  onSubmit(){
    //console.log("Teste: " + this.soil[0].id);
    if(this.soil.length === 0){
      this.idSoil = 1;
    }else{
      this.idSoil = this.soil[0].id;
    }

    if (this.areaForm.invalid){
      return;
    }
    if(!this.isEdit){
      this.areaService.addArea(this.areaForm.value, this.idSoil).subscribe(
        data => {
          this.alertService.success("Area Cadastrada");
          this.router.navigate(["/area"]);
        }, error => {
          this.alertService.error(error);
        }
      )
    }else{
      this.areaService.updateArea(this._id, this.areaForm.value, this.idSoil).subscribe(
        data => {
          this.alertService.success("Area Atualizada!");
          this.router.navigate(["/area"]);
        }, error => console.error(error)
      );
    }
  }

  get f(){
    return this.areaForm.controls;
  }

}
