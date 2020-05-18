import { NgModule } from '@angular/core';

import { MatButtonModule, MatInputModule, MatFormFieldModule, 
        MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, 
        MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, 
        MatTabsModule, MatCardModule, MatProgressSpinnerModule, MatDialogModule,
        MatChipsModule, MatSelectModule } from '@angular/material';


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
        MatChipsModule,
        MatSelectModule
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
        MatChipsModule,
        MatSelectModule
    ]
})
export class MaterialModule {}