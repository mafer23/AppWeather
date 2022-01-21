import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  hide = true;

  form = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.maxLength(10)]),
      email: new FormControl(''),
      password: new FormControl('')
  });

  constructor( ) { }

  ngOnInit(): void {

  }

  save(event:Event){
    console.log(this.form.value);
  }

}
