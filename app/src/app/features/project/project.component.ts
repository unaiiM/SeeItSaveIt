import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public project : string = "";
  public constructor(public route : ActivatedRoute){}

  public ngOnInit(){
    this.project = <string> this.route.snapshot.paramMap.get('project');
    console.log(this.project);
  };

}
