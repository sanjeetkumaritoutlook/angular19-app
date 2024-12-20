import { Component , ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from './../api.service';
import { CommonModule } from '@angular/common';
import {FormControl,ReactiveFormsModule}  from '@angular/forms';
import { debounceTime, distinctUntilChanged,switchMap,map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-import-rxjs',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './import-rxjs.component.html',
  styleUrl: './import-rxjs.component.scss'
})
export class ImportRxjsComponent {
  data: any;
  searchControl = new FormControl();
  searchInput$ = this.searchControl.valueChanges.pipe(
    debounceTime(300), // Wait for 300ms after user stops typing
    distinctUntilChanged() // Ignore repeated values
  );

  @ViewChild('searchInput2', { static: true }) searchInput2!: ElementRef;
  searchInput2$: any;

  constructor(private ApiService: ApiService,private http: HttpClient) {}

  ngOnInit() {
    this.ApiService.fetchData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );


    // this.searchInput$.subscribe((query) => {
    //   console.log('Search Query:', query); // Process the search query
    // });
    this.searchInput$.pipe(
      debounceTime(300), // Wait for user to stop typing
      distinctUntilChanged(), // Ignore duplicate inputs
      switchMap((query) => this.http.get(`https://api.github.com/search/repositories?q=${query}`))
    ).subscribe((results) => {
      console.log(results);
    });


    this.searchInput2$ = fromEvent(this.searchInput2.nativeElement, 'input').pipe(
      debounceTime(300),
      map((event: any) => event.target.value),
      distinctUntilChanged()
    );

    this.searchInput2$.subscribe((query: string) => {
      console.log('Search Query:', query); // Process the search query
    });
  }
}
