import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text = 'Home page';
  quoteText = 'This text is meant to be quoted';

  constructor() { }

  ngOnInit() {
  }

}
