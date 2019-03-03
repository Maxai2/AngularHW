import { Visitor } from './../models/visitor';
import { Component, OnInit, Inject } from '@angular/core';
import { ErrorStateMatcher, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VisitorService } from '../services/visitor.service';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-new-visitor',
  templateUrl: './edit-new-visitor.component.html',
  styleUrls: ['./edit-new-visitor.component.less']
})
export class EditNewVisitorComponent implements OnInit {

  visitorForm: FormGroup;
  matcher = new CustomErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditNewVisitorComponent>,
    private visitorService: VisitorService,
    @Inject(MAT_DIALOG_DATA) private data: Visitor
  ) { }

  ngOnInit() {
    this.visitorForm = this.fb.group({
      fullName: [this.data.fullName, Validators.required],
      phone: [this.data.phone, Validators.required]
    });
  }

  onSubmit() {
    if (this.visitorForm.valid) {
      if (this.data.id === 0) {
        const visitor = new Visitor(
          0,
          this.visitorForm.value.fullName,
          this.visitorForm.value.phone
        );

        this.dialogRef.close(visitor);
      } else {
        this.data.fullName = this.visitorForm.value.fullName;
        this.data.phone = this.visitorForm.value.phone;

        this.dialogRef.close(this.data);
      }
    }
  }

}
