import { NgModule }      from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CustomersComponent }  from './customers.component';
import { CustomersListComponent }  from './customers-list/customers-list.component';
import { FilterTextBoxComponent }  from './customers-list/filter-textbox.component';

@NgModule({
  imports:      [ CommonModule , SharedModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextBoxComponent ],
  exports: [CustomersComponent]
})
export class CustomersModule { }