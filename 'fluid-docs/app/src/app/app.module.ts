import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentPageComponent } from './pages/component-page/component-page.component';
import { ComponentDocsComponent } from './pages/component-page/components/component-docs/component-docs.component';
import { CreateElementDirective } from './pages/component-page/components/component-docs/create-element.directive';
import { DynamicDataTableComponent } from './pages/advanced-usage/dynamic-data-table/dynamic-data-table.component';
import { ApiLoadedDataTableComponent } from './pages/advanced-usage/dynamic-data-table/api-loaded-data-table/api-loaded-data-table.component';
import { ObservableDataTableComponent } from './pages/advanced-usage/dynamic-data-table/observable-data-table/observable-data-table.component';
import { SwitchingDataArrayTableComponent } from './pages/advanced-usage/dynamic-data-table/switching-data-array-table/switching-data-array-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormElementsComponent } from './pages/advanced-usage/forms/form-elements/form-elements.component';
import { ExpandableFormTemplateComponent } from './pages/advanced-usage/dynamic-data-table/expandable-row-template/expandable-form-template.component';
import { FormsComponent } from './pages/advanced-usage/forms/forms.component';
import { CompleteFormComponent } from './pages/advanced-usage/forms/complete-form/complete-form.component';
import { ToggleFormComponent } from './pages/advanced-usage/forms/toggle-form/toggle-form.component';
import { ModifyingDataInTableComponent } from './pages/advanced-usage/dynamic-data-table/modifying-data-in-table/modifying-data-in-table.component';
import { GridFormExampleComponent } from './pages/advanced-usage/forms/grid-form-example/grid-form-example.component';
import { SetValuesOnChangeComponent } from './pages/advanced-usage/forms/set-values-on-change/set-values-on-change.component';
import { CodeSnippetComponent } from './pages/advanced-usage/forms/code-snippet/code-snippet.component';
import { GroupingAndSelectableComponent } from './pages/advanced-usage/dynamic-data-table/grouping-and-selectable/grouping-and-selectable.component';
import { ApplyingGroupFooterComponent } from './pages/advanced-usage/dynamic-data-table/applying-group-footer/applying-group-footer.component';
import { ComplexWithComponentRendererComponent } from './pages/advanced-usage/dynamic-data-table/complex-with-component-renderer/complex-with-component-renderer.component';
import { ComponentBuilderComponent } from './pages/component-page/components/component-builder/component-builder.component';
import { WalkthroughsModule } from './pages/developers/walkthroughs/walkthroughs.module';
import { TablePlaygroundComponent } from './pages/playgrounds/table/table-playground.component';
import { FormPlaygroundComponent } from './pages/playgrounds/form/form-playground.component';
import { EOYNotesModalComponent } from './content/eoynotes-modal/eoynotes-modal.component';
import { BasicContentPageComponent } from './pages/basic-content-page/basic-content-page.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { ContentBlockComponent } from './components/content-block/content-block.component';
import { ComponentApiComponent } from './pages/component-page/components/component-api/component-api.component';
import { ComponentUsageComponent } from './pages/component-page/components/component-usage/component-usage.component';
import { ComponentChangelogComponent } from './pages/component-page/components/component-changelog/component-changelog.component';
import { FrameworkSwitcherComponent } from './components/framework-switcher/framework-switcher.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';
import { ComponentCardComponent } from './components/component-card/component-card.component';
import { FrameworkSnippetComponent } from './components/framework-snippet/framework-snippet.component';
import { TableWrapperComponent } from './components/wrappers/table-wrapper/table-wrapper.component';
import { FormWrapperComponent } from './components/wrappers/form-wrapper/form-wrapper.component';
import { ComponentPreviewComponent } from './components/wrappers/component-preview/component-preview.component';
import { AdditionalHeaderRowComponent } from './pages/advanced-usage/dynamic-data-table/additional-header-row/additional-header-row.component';
import { ApplyingSingleFooterComponent } from './pages/advanced-usage/dynamic-data-table/applying-single-footer/applying-single-footer.component';
import { EnvironmentStatusComponent } from './components/environment-status/environment-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPageComponent,
    ComponentDocsComponent,
    CreateElementDirective,
    DynamicDataTableComponent,
    ApiLoadedDataTableComponent,
    ObservableDataTableComponent,
    SwitchingDataArrayTableComponent,
    FormElementsComponent,
    ExpandableFormTemplateComponent,
    FormsComponent,
    CompleteFormComponent,
    ToggleFormComponent,
    ModifyingDataInTableComponent,
    GridFormExampleComponent,
    SetValuesOnChangeComponent,
    CodeSnippetComponent,
    GroupingAndSelectableComponent,
    ApplyingGroupFooterComponent,
    ComplexWithComponentRendererComponent,
    ComponentBuilderComponent,
    TablePlaygroundComponent,
    FormPlaygroundComponent,
    EOYNotesModalComponent,
    BasicContentPageComponent,
    ContentSectionComponent,
    ContentBlockComponent,
    ComponentApiComponent,
    ComponentUsageComponent,
    ComponentChangelogComponent,
    FrameworkSwitcherComponent,
    SwitchThemeComponent,
    ComponentCardComponent,
    FrameworkSnippetComponent,
    TableWrapperComponent,
    FormWrapperComponent,
    ComponentPreviewComponent,
    AdditionalHeaderRowComponent,
    ApplyingSingleFooterComponent,
    EnvironmentStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    WalkthroughsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
