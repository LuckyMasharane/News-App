import { Component } from '@angular/core';
import { NewsfeedService } from '../newsfeed.service';
import { FormGroup, FormBuilder, Validators,FormControl  } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  forecast: any;
  validations_form: FormGroup;

  constructor( private formBuilder: FormBuilder,private newsService: NewsfeedService) {
    this.validations_form = this.formBuilder.group({
      city: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });



    this.loadWeather(this.validations_form.value.city);
  }

  loadWeather(city){
    this.newsService.getWeather(this.validations_form.value.city).subscribe( weather => {
      this.forecast = weather;
      console.log(this.forecast);
      
    })
  }
}
