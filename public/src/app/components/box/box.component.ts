import { Component, Input, OnInit } from '@angular/core';
import { Boxes } from 'src/app/interfaces/admin/box';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input("box") public box : Boxes = <Boxes> {};
  constructor() { }

  ngOnInit(): void {
  }

}
