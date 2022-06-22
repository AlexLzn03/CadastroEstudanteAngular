import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-estudante-detail',
  templateUrl: './estudante-detail.component.html',
  styleUrls: ['./estudante-detail.component.css']
})
export class EstudanteDetailComponent implements OnInit {
  @Input() estudante?: Estudante;

  constructor(
    private route: ActivatedRoute,
    private estudanteService: EstudanteService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEstudante();
  }
  
  getEstudante(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.estudanteService.getEstudante(id)
      .subscribe(estudante => this.estudante = estudante);
}
goBack(): void {
  this.location.back();
}
save(): void {
  if (this.estudante) {
    this.estudanteService.updateEstudante(this.estudante)
      .subscribe(() => this.goBack());
  }
}
}