import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TweetServiceService {

  private trendsUrl = 'http://localhost:8080/show?id=';

  constructor(private http: HttpClient) {}

    getTweets(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/timeline?count=100").pipe(
      map(data => data),
      catchError(err => {
        console.log(err);
        return err;
      })
    );
  }
  getTweet(idTweet:number): Observable<any> {
    
    return this.http.get<any>(this.trendsUrl+idTweet).pipe(
      
      catchError(err => {
        console.log(err);
        return err;
      })
    );
  }
}
