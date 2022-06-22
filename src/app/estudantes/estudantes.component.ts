import { Component, OnInit } from '@angular/core';

import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';
import { MessageService } from '../message.service';
import { ESTUDANTES } from '../mock-estudantes';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {
  estudantes = ESTUDANTES;
  estudante: Estudante[] = [];

  constructor(private estudanteService: EstudanteService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
        .subscribe(estudantes => this.estudantes = estudantes);
  }
}
