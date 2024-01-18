import { Component } from '@angular/core';
import { dataFake } from '../content/data/dataFake';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data: any[] = dataFake
constructor(){
}
}
