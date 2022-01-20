import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../../services/weather.service';
import {FormControl } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nameField = new FormControl();
  data = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(){


  }

  getWeather(){
    console.log(this.nameField.value);
    this.weatherService.getWeather(this.nameField.value)
    .then((resp: any) => {
              console.log('data del perfil 2: ', resp);
        this.data = resp.data;

      })
    // const {cityName} =this.formFormulario.value;

    // console.log({cityName});


      //  this.weatherService
      // .getWeather({cityName}).then((resp: any) => {
      //            console.log('data del perfil 2: ', resp);
      //     this.data = resp.data;

      // })
  }

  // getWeather(cityName: string) {
  //   this.weatherService
  //     .getWeather(cityName)
  // }
}
