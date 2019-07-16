import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthUtilService } from 'src/app/auth/auth-util.service';

@Component({
  selector: 'app-map-form',
  templateUrl: './map-form.component.html',
  styleUrls: ['./map-form.component.css']
})
export class MapFormComponent implements OnInit {
  mapForm: FormGroup;

  texto: string = 'UltimateAngularProject Mapping';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.mapForm = this.formBuilder.group({
      latitude: ["", Validators.required],
      longitude: ["", Validators.required]
    })
  }

  onSubmit(){
    this.ngOnInit();
  }

  get f(){
    return this.mapForm.controls;
  }
}
