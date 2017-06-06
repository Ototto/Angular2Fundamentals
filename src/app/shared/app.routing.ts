/**
 * Created by otott on 06.06.2017.
 */

import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: '**', component: ErrorComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}