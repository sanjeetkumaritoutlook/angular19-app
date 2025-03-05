import { Component ,signal} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';  //https://medium.com/@davidepassafaro/angular-resource-and-rxresource-apis-what-you-need-to-know-aa1c178e43e9
import	{of, delay } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  template:`
  <div *ngIf="weather.isLoading()">Loading weather...</div>
  <div *ngIf="weather.error()">Error:	{{weather.error() }}</div> 
  <div *ngIf="weather.value()">
  <h3>Weather Data:</h3>
  <pre>{{weather.value() | json}}</pre>
</div>
  <button (click)="reloadWeather()">Reload Weather</button>
  `,
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  weather = rxResource({
   loader:()=>
  of({
  temperature: Math.floor(Math.random() * 30) + 10,
  condition: 'Sunny',
  }).pipe(delay(1000)),
});
  reloadWeather(){
     this.weather.reload();
    }
}
