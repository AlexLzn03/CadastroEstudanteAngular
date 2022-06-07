import { Component, OnInit } from '@angular/core';

import { Professor } from '../professor';
import { PROFESSORES } from '../mock-professores';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  selectedProfessor?: Professor;
  professores: Professor[] = [];

  constructor(private professorService: ProfessorService) {}

  ngOnInit(): void {
    this.getProfessores();
  }
  onSelect(professor: Professor): void {
    this.selectedProfessor = professor;
  }
  getProfessores(): void {
    this.professorService.getProfessores()
        .subscribe(professores => this.professores = professores);
  }

}
