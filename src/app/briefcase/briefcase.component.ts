import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.scss']
})
export class BriefcaseComponent implements OnInit {

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null,],
      email: [null,],
      text: [null,],
    })
  }

  onSubmit(values: any) {
    // console.log(values);
    if (this.form.valid) {

    }
  }

}
