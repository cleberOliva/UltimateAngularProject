import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      mail: ["", Validators.required],
      phone: ["", Validators.required],
      password: ["", Validators.required],
      birth: ["", Validators.required],
    });
  }

  onSubmit(){
    this.registerService.addUser(this.registerForm.value).subscribe(
      data => {
        this.router.navigate(["/login"]);
      }, error => console.error(error)
    );
  }

  get f(){
    return this.registerForm.controls;
  }

}
