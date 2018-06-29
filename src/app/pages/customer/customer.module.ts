import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { CustormersRoutes} from './customer.routing';
import { CustomersListComponent} from './customers-list/customers-list.component';

const routes: Routes = [{
	path: '',
	data: {
        title: 'Customer Page',
        urls: [{title: 'Dashboard',url: '/customers'},{title: 'Customer Page'}]
    },
	component: CustomersListComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule
  ],
  declarations: [
    CustomersListComponent
  ]
})

export class CustomerModule {}