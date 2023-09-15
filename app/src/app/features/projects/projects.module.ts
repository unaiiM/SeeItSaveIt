import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { List } from 'src/app/types/short-ttd-list/short-ttd-list';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
