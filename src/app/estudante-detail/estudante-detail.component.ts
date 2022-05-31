import { Component, OnInit, Input } from '@angular/core';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-estudante-detail',
  templateUrl: './estudante-detail.component.html',
  styleUrls: ['./estudante-detail.component.css']
})
export class EstudanteDetailComponent implements OnInit {
  @Input() estudante?: Estudante;

  constructor() { }

  ngOnInit(): void {
  }

}
