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

  baseUrl: string = "http://128.199.202.116";

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.http.get(`${this.baseUrl}/food`).subscribe(data => {
      this.food = data;
    });


    this.http.post(`${this.baseUrl}/vote`, {
      name: "Retro's Cocktail Lounge",
    }).subscribe(res => {
      console.log(res);
    }, err => {
      console.log("Error occured");
    });

  }

  onSubmit() {
    this.http.post(`${this.baseUrl}/vote`, {
      name: 'foo',
    }).subscribe(res => {
      console.log(res);
    }, err => {
      console.log("Error occured");
    });
  }
}
