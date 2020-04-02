import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { ITimeLineaConfiguration } from "../interfaces/timeLineConfigurationInterface";
import { ITweet } from "../interfaces/tweetInterface";
import { element } from "protractor";

@Injectable({
  providedIn: "root"
})
export class TweetServiceService {
  private searchURL = "http://localhost:8080/search?q=";

  userConfiguration: ITimeLineaConfiguration;

  constructor(private http: HttpClient) {
    this.userConfiguration = {
      hideAccountsNotVerified: false,
      hidePeopleWhoDontfollow: false,
      hideDefaultProfile: false,
      hideTweetsWhitLinks: false,
      TweetsTruncated: false
    };
  }

  getTweets(tweetsToDisplay: number): Observable<any> {
    return this.http
      .get<any>(`http://localhost:8080/timeline?count=${tweetsToDisplay}`)
      .pipe(
        map(data => (data = this.finalFilter(data))),

        catchError(err => {
          console.log(err);
          return err;
        })
      );
  }

  filterTweetsByConfiguration(tweet: any) {
    if (
      this.userConfiguration.hideAccountsNotVerified &&
      !tweet.user.verified
    ) {
      return false;
    }
    if (
      this.userConfiguration.hidePeopleWhoDontfollow &&
      !tweet.user.following
    ) {
      return false;
    }
    if (
      this.userConfiguration.hideDefaultProfile &&
      tweet.user.default_profile
    ) {
      return false;
    }
    if (
      this.userConfiguration.hideTweetsWhitLinks &&
      tweet.entities.urls != 0
    ) {
      return false;
    }
    if (this.userConfiguration.TweetsTruncated && tweet.truncated) {
      return false;
    }
    return true;
  }

  finalFilter(tweet: any) {
    const tweetFiltered = tweet.filter(element =>
      this.filterTweetsByConfiguration(element)
    );
    return tweetFiltered;
  }

  getRealTimeConfiguration(): ITimeLineaConfiguration {
    return this.userConfiguration;
  }

  getSearchTweets(searchText: string, count: number): Observable<any> {
    return this.http
      .get<any>(this.searchURL + searchText + "&count=" + count)
      .pipe(catchError(this.handleError<ITweet[]>("getSearchTweets", [])));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
