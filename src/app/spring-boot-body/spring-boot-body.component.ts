import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../user-services.service';
import { User } from './User';

@Component({
  selector: 'app-spring-boot-body',
  templateUrl: './spring-boot-body.component.html',
  styleUrls: ['./spring-boot-body.component.css']
})
export class SpringBootBodyComponent implements OnInit {

  public userForm: FormGroup;
  public  Users  = [] as User[];

  users: User = {
    id:undefined,
    firstName: '',
    lastName: '',
    pinCode:'',
    dob: '',
    joiningDate: '',
    deleteStatus:false
  };

  constructor(public form: FormBuilder,private _userService : UserServicesService,public dialog: MatDialog,private _snackBar: MatSnackBar) {
    this.userForm = this.form.group({
      'id':[this.users.id],
      'firstName': [this.users.firstName, [Validators.required]],
      'lastName': [this.users.lastName, [Validators.required]],
      'pinCode':[this.users.pinCode,[Validators.minLength(6)]],
      'dob': [this.users.dob, [Validators.required]],
      'joiningDate': [this.users.joiningDate],
      'deleteStatus':[this.users.deleteStatus]
    });
  }

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  getAllUser(){
    this._userService.getAllUser()
      .subscribe((data:User[]) => this.Users
      );  
  }

  

  openAddDialog(){
    this.userForm.controls['id'].reset
    this.userForm.controls['firstName'].reset();
    this.userForm.controls['lastName'].reset();
    this.userForm.controls['pinCode'].reset();
    this.userForm.controls['dob'].reset();
    const myTempDialog = this.dialog.open(this.dialogRef,{});
    myTempDialog.afterClosed().subscribe((res) => {
    });
  }

  openEditDialog(user:User){
    this.userForm.controls['id'].setValue(user.id);
    this.userForm.controls['firstName'].setValue(user.firstName);
    this.userForm.controls['lastName'].setValue(user.lastName);
    this.userForm.controls['pinCode'].setValue(user.pinCode);
    this.userForm.controls['dob'].setValue(user.dob);
    const myTempDialog = this.dialog.open(this.dialogRef,{data: user });
    myTempDialog.afterClosed().subscribe((res) => {
    });
  }

  saveUser(){
    console.log(this.userForm.value);
    this._userService.insertUser(this.userForm.value).subscribe(suc => {
      this._userService.getAllUser()
    .subscribe((data) => this.Users = data
    );
    this.dialog.closeAll();
    this._snackBar.open("User Inserted", "Cancel");
  },
  err => {
    this.dialog.closeAll();
    this._snackBar.open("Something went Wrong"+err, "Cancel");
  });
  }

  update(){
    this._userService.updateUser(this.userForm.value,this.userForm.controls['id'].value).subscribe(suc => {
      this._userService.getAllUser()
    .subscribe((data) => this.Users = data,
    
    );
    this.dialog.closeAll();
    this._snackBar.open("User Updated", "Cancel");
  },
  err => {
    this.dialog.closeAll();
    this._snackBar.open("Something went Wrong"+err, "Cancel");
  });
  }

  softDelete(id:any){
    this._userService.deleteUserbyIDSoft(id).subscribe(
      suc => {
        this._userService.getAllUser()
      .subscribe((data) => this.Users = data
      );
    this.dialog.closeAll();
    this._snackBar.open("User Mark as Deleted", "Cancel");
    },
    err => {
      this.dialog.closeAll();
      this._snackBar.open("Something went Wrong"+err, "Cancel");
    }
    );
  }

  hardDelete(id:any){
    this._userService.deleteUserbyIDHard(id).subscribe( suc => {
      this._userService.getAllUser()
      .subscribe((data) => this.Users = data
      );
      this.dialog.closeAll();
    this._snackBar.open("User  Deleted", "Cancel");
  },
  err => {
    this.dialog.closeAll();
    this._snackBar.open("Something went Wrong"+err, "Cancel");
  });
  }

  ngOnInit(): void {
    
    this._userService.getAllUser()
      .subscribe((data) => this.Users = data
      );
      
      //console.log(htUsers);
  }

}
