import { NgModule } from '@angular/core';

import { MatButtonModule, MatInputModule, MatFormFieldModule, 
        MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, 
        MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, 
        MatTabsModule, MatCardModule, MatProgressSpinnerModule, MatDialogModule,
        MatChipsModule } from '@angular/material';


@NgModule({
    imports:[
        MatButtonModule, 
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatChipsModule
    ],
    exports:[
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatChipsModule
    ]
})
export class MaterialModule {}