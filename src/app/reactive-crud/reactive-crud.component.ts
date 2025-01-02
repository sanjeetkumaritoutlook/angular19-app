import { Component,OnInit } from '@angular/core';
import { ApiCrudService } from './../api-crud.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-reactive-crud',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-crud.component.html',
  styleUrl: './reactive-crud.component.scss'
})
export class ReactiveCrudComponent implements OnInit {
  items: any[] = [];
  // formData: any = { title: '', body: '' };
  crudForm: FormGroup;
  editMode: boolean = false;
  currentId: number | null = null;

  constructor(private fb: FormBuilder,private apiService: ApiCrudService) {
      // Initialize the form
      this.crudForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(3)]],
        body: ['', [Validators.required, Validators.minLength(5)]]
      });
  }

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll(): void {
    this.apiService.getAll().subscribe(data => {
      this.items = data;
    });
  }

  save(): void {
    if (this.editMode && this.currentId !== null) {
      this.apiService.update(this.currentId, this.crudForm.value).subscribe(() => {
        this.resetForm();
        this.fetchAll();
      });
    } else {
      this.apiService.create(this.crudForm.value).subscribe(() => {
        this.resetForm();
        this.fetchAll();
      });
    }
  }

  edit(item: any): void {
    this.editMode = true;
    this.currentId = item.id;
    this.crudForm.setValue({
      title: item.title,
      body: item.body
    });
  }

  delete(id: number): void {
    this.apiService.delete(id).subscribe(() => {
      this.fetchAll();
    });
  }

  resetForm(): void {
    this.crudForm.reset();
    this.editMode = false;
    this.currentId = null;
  }
}
