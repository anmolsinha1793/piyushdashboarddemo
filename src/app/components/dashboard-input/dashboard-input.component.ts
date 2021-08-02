import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard-input',
  templateUrl: './dashboard-input.component.html',
  styleUrls: ['./dashboard-input.component.scss']
})
export class DashboardInputComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private fb: FormBuilder, private dataService: DataService, private route: Router) {
    this.createForm();
  }
  ngOnInit(): void {

  }
  createForm() {
    this.userForm = this.fb.group({
      posts: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      users: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      engagement: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      reach: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      impressions: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
}

  onSubmit(userFormm: FormGroupDirective): void {
    this.dataService.setDataStash(this.userForm.value);
    sessionStorage.setItem('userInput', JSON.stringify(this.userForm.value));
    this.route.navigate(['/dashboard']);
    this.onReset(userFormm);
  }
  onReset(userFormm: FormGroupDirective): void {
    userFormm.resetForm();
    this.userForm.reset();
  }
}
