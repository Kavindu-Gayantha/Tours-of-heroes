import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  /* This is a typical "service-in-service" scenario: 
   you inject the MessageService into the HeroService,
    which is injected into the HeroesComponent.
    */

  // getHeroes():Hero[]{
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);//api call here
  }
  // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
}
