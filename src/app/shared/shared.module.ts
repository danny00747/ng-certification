import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ValidZipCodePipe} from './pipes/valid-zip-code.pipe';

@NgModule({
    declarations: [ValidZipCodePipe],
    imports: [
        CommonModule
    ], exports: [ValidZipCodePipe], providers: [ValidZipCodePipe]
})
export class SharedModule {
}
