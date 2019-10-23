import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  empForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.empForm = this.fb.group({
      EmpName: ['', Validators.required ],
      EmpAddress: ['', Validators.required ],
      EmpDOB: ['', Validators.required ],
      EmpDepartment: ['', Validators.required],
      EmpDesignation: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

}