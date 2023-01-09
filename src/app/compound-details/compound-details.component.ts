import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-compound-details',
  templateUrl: './compound-details.component.html',
  styleUrls: ['./compound-details.component.css']
})
export class CompoundDetailsComponent implements OnInit {
  object!:any;
  constructor(private api:ApiService,private route:ActivatedRoute){
  }

  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    this.api.getCompound(id).subscribe((data)=>{
      this.object=data;
      console.log(data);
    })
  }
}
