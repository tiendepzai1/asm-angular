import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [CommonModule,FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  users = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    role: 'admin',
    sdt : '123123123'
  },
  {
    id: 2,
    name: 'Trần Thị B',
    email: 'tranthib@example.com',
    role: 'user',
    sdt : '234234234'
  },
  {
    id: 3,
    name: 'Lê Văn C',
    email: 'levanc@example.com',
    role: 'user',
    sdt : '456456456'
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    email: 'phamthid@example.com',
    role: 'user',
    sdt : '4567567567'
  }
];
filterText ='';
checkUser() {
  return this.users.filter((user)=>
    user.id.toString().includes(this.filterText.toString()) ||
  user.name.toLowerCase().includes(this.filterText.toLowerCase())
  )

}

filterUser (){
  return this.users.filter((user)=>
    user.name.toLowerCase().includes(this.filterText.toLocaleLowerCase())
  
  )

}

}
