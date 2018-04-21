import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FoodService {

  constructor() { }

  API_URL: string = "128.199.202.116"

  // getBoardBacklogs(boardId:number): Observable<ApiResponse> {
  //   return this.http.get(`${this.API_URL}/jira/${boardId}/backlog`)
  //   .map((res: Response) => res.json())
  //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  // }


}
