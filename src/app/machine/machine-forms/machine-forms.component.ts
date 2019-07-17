import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/register/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthUtilService } from 'src/app/auth/auth-util.service';
import { AlertService } from 'src/app/alert';
import { MachineService } from '../machine.service';
import { RegisterService } from 'src/app/register/register.service';
import { Machine } from '../machine.model';

@Component({
  selector: 'app-machine-forms',
  templateUrl: './machine-forms.component.html',
  styleUrls: ['./machine-forms.component.css']
})
export class MachineFormsComponent implements OnInit {

  machineForm: FormGroup;
  user: User;
  isEdit: boolean = false;
  private _id: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authUtil: AuthUtilService,
    private alertService: AlertService,
    private machineService: MachineService,
    private userService: RegisterService,
    private route: ActivatedRoute
  ) {
    if(!authUtil.isLogged()){
      this.alertService.error("Você precisa estar logado!");
      this.router.navigate(["/index"]);
    }else{
      this.userService.getUser().subscribe(
        (data: User) => {
          this.user = data;
        }, error => console.error(error)
      );
    }
  }

  ngOnInit() {

    this.machineForm= this.formBuilder.group({
      year: ["", Validators.required],
      description: ["", Validators.required]
    });

    this.route.paramMap.subscribe(param => {
      const value = param.get("id");
      if(value){
        this.isEdit = true;
        this.machineService.getById(parseInt(value)).subscribe(
          (machine: Machine) => {
            this._id = parseInt(value);
            this.machineForm.patchValue({
              year: machine.year,
              description: machine.description
            });
          }
        );
      }
    });
  }

  onSubmit(){
    if(this.machineForm.invalid){
      return;
    }

    if(!this.isEdit){
      this.machineService.addMachine(this.machineForm.value, this.user.id).subscribe(
        data => {
          this.alertService.success("Maquina Cadastrado!");
          this.router.navigate(["/machine"]);
        }, error => console.error(error)
      );
    }else{
      this.machineService.updateMachine(this._id, this.machineForm.value, this.user.id).subscribe(
        data => {
          this.alertService.success("Maquina Atualizado!");
          this.router.navigate(["/machine"]);
        }, error => console.log(error)
      );
    }
  }

  get f(){
    return this.machineForm.controls;
  }
}
