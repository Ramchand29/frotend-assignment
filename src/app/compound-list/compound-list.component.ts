import { Component } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CreateComponent } from '../dialog/create/create.component';
import { DeleteComponent } from '../dialog/delete/delete.component';
import { UpdateComponent } from '../dialog/update/update.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-compound-list',
  templateUrl: './compound-list.component.html',
  styleUrls: ['./compound-list.component.css']
})
export class CompoundListComponent {
  object:any;
  visible=false;
  length !:any;
  pageSize = 12;
  pageIndex = 0;
  pageSizeOptions = [6, 12, 18];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  constructor(public dialog: MatDialog,private api:ApiService) {
    this.getAllCompound(12,0);
  }

  getAllCompound(pageSize:any,pageIndex:any){
    this.api.getAllCompound(pageSize,pageIndex).subscribe((data)=>{
      this.length=data.totalItems;
      this.object=data.records;
      console.log(data);
      if(data.totalItems===0){
        this.visible=false;
      }else{
        this.visible=true;
      }
    });
  }
  uploadCompund(){
    this.dialog.open(CreateComponent, {
      height: '200px',
    }).afterClosed().subscribe(val=>{
      if(val==='upload'){
        this.getAllCompound(12,0);
        this.visible=true;
      }
    })
  }
  update(e:any,datas:any): void {
    this.dialog.open(UpdateComponent, {
      height: '500px',
      data:datas
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllCompound(12,0);
      }
    })
    e.stopPropagation();
  }

  delete(e:any,datas:any): void {
    this.dialog.open(DeleteComponent, {
     
      data:datas
    }).afterClosed().subscribe(val=>{
      if(val==='delete'){
        this.getAllCompound(12,0);
      }
    })
    
    e.stopPropagation();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    console.log(this.pageEvent);
    console.log(this.length);
    console.log(this.pageSize);
    console.log(this.pageIndex);
    this.getAllCompound(this.pageSize,this.pageIndex);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
