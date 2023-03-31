import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { from } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  allUser:any;
  IsEdit = false;
  userobj = {
    first_name:'',
    last_name:'',
    email:'',
    id:''
  }
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.getLatestUser();
    console.log(this.allUser);
  }

  //add user
  adduser(formobj:any){
    console.log(formobj);
    this.commonService.Createuser(formobj).subscribe((Response)=>{
      //console.log("User has added Sucessfully")
      for(let i=0; i<this.allUser.length; i++)
       {
        this.allUser[i].id=i+1;
      }
      this.getLatestUser();
    })
    formobj.resetForm();
  }
  getLatestUser(){
    this.commonService.Getalluser().subscribe((Response)=>{
    this.allUser = Response
    console.log(Response);
    })
  }
  Edituser(user:any){
    console.log(user);
    this.userobj = user;
    this.IsEdit = true;
  }

  Deleteuser(user:any){
    this.commonService.Deleteuser(user).subscribe(()=>{
      console.log(user);
      this.getLatestUser();
    })
  }

  Updateuser(){
    this.IsEdit = !this.IsEdit;
    this.commonService.Updateuser(this.userobj).subscribe(()=>{
      this.getLatestUser();
    })
  }

  resetForm(form: FormGroup) {

    form.reset();

    // Object.keys(form.controls).forEach(key => {
    //   form.get(key).setErrors(null) ;
    // });
}
}
