import { Injectable } from '@angular/core';
import { ITrend } from '../interfaces/trendInterface'
import { HttpClient  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrendServiceService {

  private trendsUrl = 'http://localhost:8080/trends?id=23424747';
  
  
  constructor( private http: HttpClient) { }

  getTrends (): Observable<any> {
    return this.http.get<any>(this.trendsUrl)
    .pipe(
      catchError(this.handleError<ITrend[]>('getMovies', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
