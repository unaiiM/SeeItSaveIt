import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortTtdListComponent } from './components/short-ttd-list/short-ttd-list.component';

@NgModule({
  declarations: [
    ShortTtdListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortTtdListComponent
  ]
})
export class SharedModule { }
