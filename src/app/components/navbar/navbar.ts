import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router'; // 1. استيراد الموجهات

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,FormsModule], // 2. إضافتها هنا وإلا فلن تعمل الروابط أبداً
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent { 
name: string = "";

uPdatefn(event: any) {
  this.name = event.target.value; 

}


}