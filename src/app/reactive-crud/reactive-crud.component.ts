import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
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

  constructor(private fb: FormBuilder,private apiService: ApiCrudService,private cdr: ChangeDetectorRef) {
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
    if (this.crudForm.invalid) {
      return;
    }
    if (this.editMode && this.currentId !== null) {
      this.apiService.update(this.currentId, this.crudForm.value).subscribe((updatedItem) => {
        this.items = this.items.map(item => item.id === this.currentId ? updatedItem : item);
        this.cdr.detectChanges(); // Explicitly trigger change detection
        this.resetForm();
      });
    } else {
      this.apiService.create(this.crudForm.value).subscribe((newItem) => {
        this.items.push(newItem); // Add the newly created item to the list
        this.resetForm();
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
