import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [],
  exports: [
    CardModule,
    ButtonModule
  ]
})
export class PrimengModule { }
