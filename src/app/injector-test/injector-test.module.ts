import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProvideFromServiceComponent } from './provide-from-service/provide-from-service.component';
import { ProvideFromComponentComponent } from './provide-from-component/provide-from-component.component';
import { InjectorTestComponent } from './injector-test.component';
import { InjectorTestService } from './injector-test.service';
import { NewInjectorTestService } from './new-injector-test.service';
import { ProvideFromRootComponent } from './provide-from-root/provide-from-root.component';

@NgModule({
  declarations: [
    InjectorTestComponent,
    ProvideFromComponentComponent,
    ProvideFromServiceComponent,
    ProvideFromRootComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InjectorTestComponent,
    ProvideFromComponentComponent,
    ProvideFromServiceComponent,
    ProvideFromRootComponent
  ],
  providers: [
    NewInjectorTestService,
    { provide: InjectorTestService, useExisting: NewInjectorTestService }
  ]
})
export class InjectorTestModule { }
