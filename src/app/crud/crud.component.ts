import { Component,OnInit } from '@angular/core';
import { ApiCrudService } from './../api-crud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-crud',
  imports: [CommonModule,FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {
  items: any[] = [];
  formData: any = { title: '', body: '' };
  editMode: boolean = false;
  currentId: number | null = null;

  constructor(private apiService: ApiCrudService) {}

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
      this.apiService.update(this.currentId, this.formData).subscribe(() => {
        this.resetForm();
        this.fetchAll();
      });
    } else {
      this.apiService.create(this.formData).subscribe(() => {
        this.resetForm();
        this.fetchAll();
      });
    }
  }

  edit(item: any): void {
    this.editMode = true;
    this.currentId = item.id;
    this.formData = { title: item.title, body: item.body };
  }

  delete(id: number): void {
    this.apiService.delete(id).subscribe(() => {
      this.fetchAll();
    });
  }

  resetForm(): void {
    this.formData = { title: '', body: '' };
    this.editMode = false;
    this.currentId = null;
  }
}
