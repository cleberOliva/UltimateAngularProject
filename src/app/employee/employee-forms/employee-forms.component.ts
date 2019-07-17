import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUtilService } from 'src/app/auth/auth-util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/alert';
import { EmployeeService } from '../employee.service';
import { RegisterService } from 'src/app/register/register.service';
import { User } from 'src/app/register/user';
import { Employee } from '../employee.const';

@Component({
  selector: 'app-employee-forms',
  templateUrl: './employee-forms.component.html',
  styleUrls: ['./employee-forms.component.css']
})
export class EmployeeFormsComponent implements OnInit {
  employeeForm: FormGroup;
  user: User;
  isEdit: boolean = false;
  private _id: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authUtil: AuthUtilService,
    private alertService: AlertService,
    private employeeService: EmployeeService,
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
    this.employeeForm = this.formBuilder.group({
      name: ["", Validators.required]
    });

    this.route.paramMap.subscribe(param => {
      const value = param.get("id");
      if(value){
        this.isEdit = true;
        this.employeeService.getById(parseInt(value)).subscribe(
          (employee: Employee) => {
            this._id = parseInt(value);
            this.employeeForm.patchValue({
              name: employee.name
            });
            console.log(employee);
          }, error => console.error(error)
        );
      }
    });
  }

  onSubmit(){
    if(this.employeeForm.invalid){
      return;
    }

    if(!this.isEdit){
      this.employeeService.addEmployee(this.employeeForm.value, this.user.id).subscribe(
        data => {
          this.alertService.success("Funcionario Cadastrado!");
          this.router.navigate(["/employee"]);
        }, error => console.error(error)
      );
    }else{
      this.employeeService.updateEmployee(this._id, this.employeeForm.value, this.user.id).subscribe(
        data => {
          this.alertService.success("Funcionario Atualizado!");
          this.router.navigate(["/employee"]);
        }, error => console.log(error)
      );
    }

  }

  get f(){
    return this.employeeForm.controls;
  }
}
