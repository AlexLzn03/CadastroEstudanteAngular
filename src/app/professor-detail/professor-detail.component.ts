import { Component, OnInit, Input } from '@angular/core';
import { Professor } from '../professor';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-detail',
  templateUrl: './professor-detail.component.html',
  styleUrls: ['./professor-detail.component.css']
})
export class ProfessorDetailComponent implements OnInit {
  @Input() professor?: Professor;

  constructor() { }

  ngOnInit(): void {
  }

}
