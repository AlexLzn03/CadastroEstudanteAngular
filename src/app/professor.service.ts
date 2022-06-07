import { Injectable } from '@angular/core';
import { Professor } from './professor';
import { PROFESSORES } from './mock-professores';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor() { }

  getProfessores(): Observable<Professor[]> {
    const professores = of(PROFESSORES);
    return professores;
  }
}
