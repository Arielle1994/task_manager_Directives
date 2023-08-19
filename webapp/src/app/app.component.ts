import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webapp';
  photo: string ="https://cdn.shopify.com/s/files/1/1321/0493/files/70708038_10162335699455437_2472400286174412800_o.jpg?v=1616086836";

  constructor() {}
  
  ngOnInit(): void {
      }


}
