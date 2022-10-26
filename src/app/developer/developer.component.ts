import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  modelSkill1: Skill = new Skill('Angular', 'A', 'https://angular.io/');
  modelSkill2: Skill = new Skill(
    'Java',
    'une tasse',
    'https://www.java.com/fr/'
  );

  modelDeveloper: Developer = new Developer(
    'DELPEUT',
    'Julien',
    31,
    'Masculin',
    "J'aime les pommes",
    [this.modelSkill1, this.modelSkill2]
  );

  constructor() {}

  ngOnInit(): void {}
}
