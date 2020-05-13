import { NgModule } from '@angular/core';

import { MatButtonModule, MatInputModule, MatFormFieldModule, 
        MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, 
        MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, 
        MatTabsModule, MatCardModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';


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
        MatDialogModule
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
        MatDialogModule
    ]
})
export class MaterialModule {}