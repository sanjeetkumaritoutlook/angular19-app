import { Routes } from '@angular/router';
import {EditorComponent} from './editor/editor.component';
import {LoginComponent} from './login/login.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TwoWayTemplateFormComponent } from './two-way-template-form/two-way-template-form.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicReactiveFormComponent } from './dynamic-reactive-form/dynamic-reactive-form.component';
import { BigVerticalFormComponent } from './big-vertical-form/big-vertical-form.component';
import { BindingExampleComponent } from './binding-example/binding-example.component';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { ResponseDataComponent } from './response-data/response-data.component';
//import {LazyComponent}  from './lazy/lazy.component';  //when lazy loaded not needed to import
import { ParentComponent } from './parent/parent.component';
import { NewParentComponent } from './new-parent/new-parent.component';
import { ImportRxjsComponent } from './import-rxjs/import-rxjs.component';
import { CrudComponent } from './crud/crud.component';
import { ReactiveCrudComponent } from './reactive-crud/reactive-crud.component';
import { RxjsWithoutHttpComponent } from './rxjs-without-http/rxjs-without-http.component';
export const routes: Routes = [
    {path:'',
     redirectTo:'dataBinding',
     pathMatch:   'full'
    },
    {
        path:'binding-example',
        component: BindingExampleComponent
    },
    // { path: '**', 
    //  redirectTo: '' 
    // }, // Wildcard route
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'template-driven-form', component: TemplateDrivenFormComponent },
    { path: 'two-way-template-form', component: TwoWayTemplateFormComponent },
    { path: 'user-registration-form', component: UserRegistrationFormComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'dynamic-reactive-form', component: DynamicReactiveFormComponent },
    { path: 'big-vertical-form', component: BigVerticalFormComponent },
    {
        path:'editor',
        component: EditorComponent
    },
    { path: 'observable-example', component: ObservableExampleComponent },
    { path: 'api-response-data', component: ResponseDataComponent },
    {
        path: 'lazy',
        loadComponent: () =>
          import('./lazy/lazy.component').then(m => m.LazyComponent) // Lazy load the component
      },
      { path: 'parent-and-child', component: ParentComponent },
      { path: 'new-parent-and-child', component: NewParentComponent },
      { path: 'app-import-rxjs', component: ImportRxjsComponent },
      { path: 'rxjs-beyond-http', component: RxjsWithoutHttpComponent },
      { path: 'template-crud', component: CrudComponent },
      { path: 'reactive-crud', component: ReactiveCrudComponent },
];
