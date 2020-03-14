import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-display',
  templateUrl: './hero-display.component.html',
  styleUrls: ['./hero-display.component.css']
})
export class HeroDisplayComponent implements OnInit {

  constructor() { }
  @Input() hero: Hero;

  ngOnInit() {
  }

}
