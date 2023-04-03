import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { ENVIRONMENTS } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {
    private url:string=`${ENVIRONMENTS.baseUrl}/heroes`;
    constructor(private httpClient: HttpClient) { }

    getHeroes():Observable<Hero[]>{
        return this.httpClient.get<Hero[]>(this.url)
    }
    getHeroById(id:string):Observable<Hero| undefined>{
        return this.httpClient.get<Hero>(`${this.url}/${id}`)
        .pipe(
            catchError(error => of(undefined) )
        );
    }
    
}