import { Component, Input } from '@angular/core';
import { List, Item, Create } from 'src/app/types/short-ttd-list/short-ttd-list';

@Component({
  selector: 'short-ttd-list',
  templateUrl: './short-ttd-list.component.html',
  styleUrls: ['./short-ttd-list.component.css']
})
export class ShortTtdListComponent {
  @Input() list : List = [];
  @Input() create : Create = {
    text : "Create new item",
    click : () => { }
  };
};
