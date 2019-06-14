import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InjectorTestService } from './injector-test.service';
import { ProvideFromServiceComponent } from './provide-from-service/provide-from-service.component';
import { ProvideFromModuleComponent } from './provide-from-module/provide-from-module.component';
import { ProvideFromComponentComponent } from './provide-from-component/provide-from-component.component';

@NgModule({
  declarations: [
    InjectorTestModule,
    ProvideFromServiceComponent,
    ProvideFromModuleComponent,
    ProvideFromComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    InjectorTestService
  ]
})
export class InjectorTestModule { }
