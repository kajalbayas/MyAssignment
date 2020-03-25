import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public user= [{name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960},
  {name:'Pratik',email:'ayutribhuwan@gmail.com',phoneNumber:9689856960}]
  constructor() { }
  displayedColumns: string[] = ['name', 'email', 'phoneNumber','action'];
  dataSource = new MatTableDataSource<any>(this.user);
public userDetails = {};
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  isEdit = false;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  editDetails(obj) {
console.log(obj) //array object set it to register component via @Input userDetails
this.userDetails = obj;
this.isEdit =true;
  }
  deleteItems(index) {
    console.log(index)
  }

}
