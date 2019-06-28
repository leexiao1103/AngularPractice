import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProvideFromServiceComponent } from './provide-from-service/provide-from-service.component';
import { ProvideFromComponentComponent } from './provide-from-component/provide-from-component.component';
import { InjectorTestComponent } from './injector-test.component';
import { InjectorTestDirective } from './injector-test.directive';
import { MoreTestComponent } from './more-test/more-test.component';
import { ModuleService } from './module.service';


@NgModule({
  declarations: [
    InjectorTestComponent,
    ProvideFromComponentComponent,
    ProvideFromServiceComponent,
    InjectorTestDirective,
    MoreTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InjectorTestComponent,
    ProvideFromComponentComponent,
    ProvideFromServiceComponent
  ],
  providers: [ModuleService]
})
export class InjectorTestModule { }
