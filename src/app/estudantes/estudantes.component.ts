import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { ESTUDANTES } from '../mock-estudantes';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudante: Estudante[] = [];

  constructor(private estudanteService: EstudanteService) {}

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
        .subscribe(estudantes => this.estudantes = estudantes);
  }

  ngOnInit(): void {
    this.estudantes = this.estudanteService.getEstudantes();

  selectedEstudante?: Estudante;
  onSelect(estudante: Estudante): void {
  this.selectedEstudante = estudante;
}
}
