import { Component,computed, signal } from '@angular/core';
import { MENU_ITEM } from './model/side_menu';
import { sideMenu } from './shared/side_menu';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GFT';
  loggedId:boolean=false
  loginForm!:FormGroup
  userName: string = "chandan"
  Password: string = "chandan@123"
  menuItem = signal<MENU_ITEM[]>(sideMenu)
  collapsed = signal(false)
  sideNaveWidth = computed(()=>this.collapsed()?'60px':'210px')
  constructor(private router: Router){
    this.loginForm = new FormGroup ({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
  submit(){
    let pass = this.loginForm.controls['password'].value
     let user = this.loginForm.controls['username'].value
     if(this.Password==pass &&this.userName ==user){
      this.loggedId = true
      this.router.navigateByUrl('/party_list')
     }
   }
}
