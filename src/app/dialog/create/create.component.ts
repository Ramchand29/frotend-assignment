import { Component, Inject ,OnInit} from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  constructor(@Inject(MAT_DIALOG_DATA) public editdata:any,public dialogRef: MatDialogRef<CreateComponent>,
  private api:ApiService){
  }
  ngOnInit(): void {
    
  }
  
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.api.upload(this.currentFile).subscribe(
          (event: any) => {
            alert("succfully uploaded");
            this.dialogRef.close('upload');
          },
          (err: any) => {
            console.log(err);
            alert("Unsucessful");
            this.dialogRef.close('uploadfail');
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }



}
