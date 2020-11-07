import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

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
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
  heroes=HEROES;

  heros="windstorm"
  constructor() { }

  ngOnInit() {
    // console.log("typeof hero= ",typeof(this.hero))
  }
  // onSelect(hero){
  //   console.log("hero selected");
  // }

}
