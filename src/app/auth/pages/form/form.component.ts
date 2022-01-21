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
  tem:any;
  city:any;
  lat:any;
  long:any;
  humi:any;
  press:any;
  description:any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(){


  }

  getWeather(){



    this.weatherService.getWeather(this.nameField.value)
    .then((resp: any) => {


              this.tem = resp.main.temp;
              this.city = resp.name;
              this.lat = resp.coord.lat;
              this.long= resp.coord.lon;
              this.humi= resp.main.humidity;
              this.press =resp.main.pressure;


       this.data =resp;




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
