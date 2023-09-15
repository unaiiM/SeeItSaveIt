import { Component } from '@angular/core';
import { Create, List } from 'src/app/types/short-ttd-list/short-ttd-list';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public projectsList : List = [{ title: 'Unai', tags: ['tag name'], description: 'hello wold!'}];
  public createButton : Create = {
    text: "Create new project",
    click: () => {
      console.log("Hello wold!");
    }
  };
}
