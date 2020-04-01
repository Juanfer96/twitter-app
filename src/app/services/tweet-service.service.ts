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
<<<<<<< HEAD
  private searchId = 'http://localhost:8080/show?id=';
  
=======
>>>>>>> 02c86123aaff702f9c1dad109e193fd616e2199f
  constructor(private http: HttpClient) {}

  getTweets(tweetsToDisplay: number): Observable<any> {
    return this.http
      .get<any>(`http://localhost:8080/timeline?count=${tweetsToDisplay}`)
      .pipe(
        map(data => data),
        catchError(err => {
          console.log(err);
          return err;
        })
      );
  }

<<<<<<< HEAD
  getSearchTweets (searchText : string): Observable<any> {
    return this.http.get<any>(this.searchURL+searchText)
    .pipe(
      catchError(this.handleError<ITweet[]>('getSearchTweets', []))
    );
  }


  getIdTweet (searchId : string): Observable<any> {
    return this.http.get<any>(this.searchURL+searchId)
    .pipe(
      catchError(this.handleError<ITweet[]>('getIdTweet', []))
=======
  getSearchTweets (searchText : string,count :number): Observable<any> {
    return this.http.get<any>(this.searchURL+searchText+'&count='+count)
    .pipe(
      catchError(this.handleError<ITweet[]>('getSearchTweets', []))
>>>>>>> 02c86123aaff702f9c1dad109e193fd616e2199f
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


}
