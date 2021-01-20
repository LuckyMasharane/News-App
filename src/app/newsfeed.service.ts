import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_Key;

const API_URLw = environment.API_URLs;
const api_key = environment.API_KeyS;

@Injectable({
  providedIn: 'root'
}) 
export class NewsfeedService {

  constructor(private http: HttpClient) { }

  getNews(url){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`)
  }

  getWeather(city){
    // pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}
    return this.http.get(`${API_URLw}/weather?q=${city}&APPID=${api_key}`)
  }
}
