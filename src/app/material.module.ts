import { NgModule } from '@angular/core';

import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';


@NgModule({
    imports:[
        MatButtonModule, 
        MatInputModule,
        MatFormFieldModule
    ],
    exports:[
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class MaterialModule {}