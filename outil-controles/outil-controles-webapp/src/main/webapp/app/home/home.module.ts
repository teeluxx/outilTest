import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OutilControlesSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './index';

@NgModule({
    imports: [OutilControlesSharedModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OutilControlesHomeModule {}
