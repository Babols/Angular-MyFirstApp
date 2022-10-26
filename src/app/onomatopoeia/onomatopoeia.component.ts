import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onomatopoeia',
  templateUrl: './onomatopoeia.component.html',
  styleUrls: ['./onomatopoeia.component.css']
})
export class OnomatopoeiaComponent implements OnInit {
  onomatopoeiaList: Array<string> = [];

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
