import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://128.199.202.116";

  ngOnInit() {
    this.http.post(`${this.baseUrl}/vote`, {
      name: 'foo',
    }).subscribe(res => {
      console.log(res);
    }, err => {
      console.log("Error occured");
    });
  }

}
