import { Component, Inject ,OnInit} from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public editdata:any,public dialogRef: MatDialogRef<DeleteComponent>,private api:ApiService){
  }

  ngOnInit(){
  }

  deleteCompound(){
    this.api.deleteCompound(this.editdata.id).subscribe((data)=>{
      this.dialogRef.close('delete');
    },(error)=>{
      alert("Compound Deleted UnSuccesfully");
    });
  }
}
