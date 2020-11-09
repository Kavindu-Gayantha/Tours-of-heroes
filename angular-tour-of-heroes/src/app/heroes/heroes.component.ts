import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero is component variable which is outside of a method so no need to make let or var or const
  //Hero is the interface - we make a variable here as the type of Hero interface
  //all the values in the interface should be here otherwise you will get an error
  // hero:Hero={
  //   id:1,
  //   name:'windstorm',
  // }
  selectedHero:Hero;
  // onSelect(hero:Hero):void{
  //   this.selectedHero=hero;
  // }
  // heroes=HEROES;
  heroes: Hero[];

  heros="windstorm"
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    // console.log("typeof hero= ",typeof(this.hero))
    this.getHeroesMethod();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  // onSelect(hero){
  //   console.log("hero selected");
  // }
  // sampleCLick(){
  //   console.log("clicked");
  //   this.getHeroesMethod();

  // }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroesMethod(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
        .subscribe(a =>{
          this.heroes =a
        });
  }

}
