import { Routes } from '@angular/router';

import {CustomersListComponent} from './customers-list/customers-list.component'

export const CustormersRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'customers',
      component: CustomersListComponent,
      data: {
        title: 'Customers-list',
        // urls: [{title: 'customer',url: '/customers'},{title: 'ngCustomer'},{title: 'Customer'}]
      }
    }, 
    // {
    //   path: 'pagination',
    //   component: NgbdpaginationBasic,
    //   data: {
    //     title: 'Pagination',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Pagination'}]
    //   }
    // }, 
    // {
    //   path: 'accordion',
    //   component: NgbdAccordionBasic,
    //   data: {
    //     title: 'Accordion',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Accordion'}]
    //   }
    // }, 
    // {
    //   path: 'alert',
    //   component: NgbdAlertBasic,
    //   data: {
    //     title: 'Alert',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Alert'}]
    //   }
    // }, 
    // {
    //   path: 'carousel',
    //   component: NgbdCarouselBasic,
    //   data: {
    //     title: 'Carousel',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Carousel'}]
    //   }
    // },  
    // {
    //   path: 'datepicker',
    //   component: NgbdDatepickerBasic,
    //   data: {
    //     title: 'Datepicker',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Datepicker'}]
    //   }
    // }, 
    // {
    //   path: 'dropdown',
    //   component: NgbdDropdownBasic,
    //   data: {
    //     title: 'Dropdown',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Dropdown'}]
    //   }
    // }, 
    // {
    //   path: 'modal',
    //   component: NgbdModalBasic,
    //   data: {
    //     title: 'Modal',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Modal'}]
    //   }
    // }, 
    // {
    //   path: 'poptool',
    //   component: NgbdPopTooltip,
    //   data: {
    //     title: 'Popover & Tooltip',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Popover & Tooltip'}]
    //   }
    // }, 
    // {
    //   path: 'rating',
    //   component: NgbdratingBasic,
    //   data: {
    //     title: 'Rating',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Rating'}]
    //   }
    // }, 
    // {
    //   path: 'tabs',
    //   component: NgbdtabsBasic,
    //   data: {
    //     title: 'Tabs',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Tabs'}]
    //   }
    // }, 
    // {
    //   path: 'timepicker',
    //   component: NgbdtimepickerBasic,
    //   data: {
    //     title: 'Timepicker',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Timepicker'}]
    //   }
    // },  
    // {
    //   path: 'typehead',
    //   component: NgbdtypeheadBasic,
    //   data: {
    //     title: 'Typehead',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Typehead'}]
    //   }
    // },
    // {
    //   path: 'buttons',
    //   component: ButtonsComponent,
    //   data: {
    //     title: 'Button',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Button'}]
    //   }
    // },
    // {
    //   path: 'cards',
    //   component: CardsComponent,
    //   data: {
    //     title: 'Card',
    //     urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Card'}]
    //   }
    // }
  ]
  }
];
