import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { ITweet } from '../interfaces/tweetInterface';

@Injectable({
  providedIn: "root"
})
export class TweetServiceService {
  private searchURL = 'http://localhost:8080/search?q=';
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

  getSearchTweets (searchText : string): Observable<any> {
    return this.http.get<any>(this.searchURL+searchText)
    .pipe(
      catchError(this.handleError<ITweet[]>('getSearchTweets', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


}
