import { Component, Inject ,OnInit} from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  CompoundForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,@Inject(MAT_DIALOG_DATA) public editdata:any,public dialogRef: MatDialogRef<UpdateComponent>
  ,private api:ApiService){

  }
  ngOnInit(){
    this.CompoundForm = this.formBuilder.group({
      compoundName : ['',Validators.required],
      compoundDescription : ['',Validators.required]
    });

    if(this.editdata){
      this.CompoundForm.controls['compoundName'].setValue(this.editdata.CompoundName);
      this.CompoundForm.controls['compoundDescription'].setValue(this.editdata.CompounrDescription);
    }
  }


  updateCompund(){
    if(this.CompoundForm.valid){
      this.api.updateCompound(this.editdata.id,this.CompoundForm.value,this.editdata).subscribe((data)=>{
        alert("Compound Deleted Succesfully");
        this.dialogRef.close('update');
      })
    }
  }
}
