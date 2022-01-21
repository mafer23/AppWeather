import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = '58dc07170846b64fecbc9d0283bd0161';
  URI: string = '';
  clima: any = [];

  constructor(private httpClient: HttpClient ) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
   }

   getWeather(cityName: string){

    return new Promise((resolve, reject) =>{

      this.httpClient.get(`${this.URI}${cityName}`).subscribe((resp:any) =>{
        if (resp.ok) {
          this.clima = resp.data;

        }
          resolve(resp);
      },err => {
        reject(err)
      });

    });
   }

}
