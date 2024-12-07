import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentPageComponent } from './pages/component-page/component-page.component';
import { DynamicDataTableComponent } from './pages/advanced-usage/dynamic-data-table/dynamic-data-table.component';
import { FormsComponent } from './pages/advanced-usage/forms/forms.component';
import { GridFormExampleComponent } from './pages/advanced-usage/forms/grid-form-example/grid-form-example.component';
import { ExpandableFormTemplateComponent } from './pages/advanced-usage/dynamic-data-table/expandable-row-template/expandable-form-template.component';
import { TablePlaygroundComponent } from './pages/playgrounds/table/table-playground.component';
import { FormPlaygroundComponent } from './pages/playgrounds/form/form-playground.component';
import { BasicContentPageComponent } from './pages/basic-content-page/basic-content-page.component';

const routes: Routes = [
  {
    path: '',
    component: BasicContentPageComponent,
  },
  {
    path: 'pages/:id',
    component: BasicContentPageComponent,
  },
  {
    path: 'pages/:section/:id',
    component: BasicContentPageComponent,
  },
  {
    path: 'pages/:section/:id/:anchor',
    component: BasicContentPageComponent,
  },
  {
    path: 'components',
    component: ComponentPageComponent,
  },
  {
    path: 'components/:component',
    component: ComponentPageComponent,
  },
  {
    path: 'components/:component/:section',
    component: ComponentPageComponent,
  },
  {
    path: 'advanced/table/dynamic-data',
    component: DynamicDataTableComponent,
  },
  {
    path: 'advanced/table/expandable-row',
    component: ExpandableFormTemplateComponent,
  },
  {
    path: 'advanced/table/playground',
    component: TablePlaygroundComponent,
  },
  {
    path: 'advanced/form/playground',
    component: FormPlaygroundComponent,
  },
  {
    path: 'advanced/forms',
    component: FormsComponent,
  },
  {
    path: 'advanced/forms/grid',
    component: GridFormExampleComponent,
  },
  {
    path: 'walkthroughs',
    loadChildren: () =>
      import('./pages/developers/walkthroughs/walkthroughs.module').then(
        (m) => m.WalkthroughsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
