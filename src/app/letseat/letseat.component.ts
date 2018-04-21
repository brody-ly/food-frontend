import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-letseat',
  templateUrl: './letseat.component.html',
  styleUrls: ['./letseat.component.css']
})
export class LetseatComponent implements OnInit {

  food = {};

  constructor(private http: HttpClient){
  }

  ngOnInit() {

    this.http.get('http://128.199.202.116/food').subscribe(data => {
      this.food = data;
    });
  }

}
