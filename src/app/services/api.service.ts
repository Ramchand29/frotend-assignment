import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../appSetting';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  upload(file:any){
    const formData: FormData = new FormData();

    formData.append('file', file);

    return this.http.post<any>(`${AppSetting.url}/bulk`,formData);
  }

  getAllCompound(pageSize:any,pageIndex:any){
    console.log(pageSize);
    console.log(pageIndex);
    return this.http.get<any>(`${AppSetting.url}?page=${pageIndex}&size=${pageSize}`);
  }

  getCompound(id:any){
    return this.http.get<any>(`${AppSetting.url}/${id}`);
  }

  updateCompound(id:any,obj:any,data:any){
    let compoundData={
      "id": id,
      "CompoundName": obj?obj.compoundName:data.CompoundName,
      "CompounrDescription": obj?obj.compoundDescription:data.CompounrDescription,
      "strImageSource": data.strImageSource,
      "strImageAttribution": data.strImageAttribution,
      "dateModified":data.dateModified
    }
    console.log(compoundData);
    
    return this.http.put<any>(`${AppSetting.url}/${id}`,compoundData);
  }

  deleteCompound(id:any){
    return this.http.delete<any>(`${AppSetting.url}/${id}`);
  }
}
