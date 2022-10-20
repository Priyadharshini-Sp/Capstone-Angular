import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  public doRegistration(admin:any){
    return this.http.post("http://localhost:8082/adminRRegister",admin,{responseType:'text' as 'json'})
  }
public login(admin:any){
  return this.http.post("http://localhost:8082/adminRLogin",admin,{responseType:'text' as 'json'})
}
public Registration(user:any){
  return this.http.post("http://localhost:8082/usersRegister",user,{responseType:'text' as 'json'})
}
public dologin(user:any){
  return this.http.post("http://localhost:8082/usersLogin",user,{responseType:'text' as 'json'})
}
public AddCar(car:any){
  return this.http.post("http://localhost:8082/carRegister",car,{responseType:'text' as 'json'})
}
public getcars(){
  return this.http.get("http://localhost:8082/getAll");
   }
   public getusers(){
    return this.http.get("http://localhost:8082/getAllusers");
     }
  
     public deletecar(carId:any){
      return  this.http.delete("http://localhost:8082/cancel/"+carId);
     
     }
     public deleteuser(userid:any){
      return  this.http.delete("http://localhost:8082/delete/"+userid);
     
     }
     public updateEmploye(data : any,id:string){

     }
     public form(form:any){
      return this.http.post("http://localhost:8082/form",form,{responseType:'text' as 'json'})
     }
     public getforms(){
      return this.http.get("http://localhost:8082//getAllfroms");
       }
    
}
