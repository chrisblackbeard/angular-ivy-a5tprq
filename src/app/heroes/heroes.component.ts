import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero"
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 0,
    name: 'Winston'
  }

  heroes = HEROES;

  onSelect(hero) {
    this.hero.id = hero.id
    this.hero.name = hero.name
  }

  constructor() { }

  ngOnInit() {
  }

}

