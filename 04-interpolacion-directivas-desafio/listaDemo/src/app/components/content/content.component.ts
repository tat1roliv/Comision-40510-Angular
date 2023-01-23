import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  studentsList: Student[] = [
    {
      name: 'Ada',
      lastName: 'Lovelace',
      grade: 10,
      isApproved: true,
      email: 'ada@coding.com',
      photo: 'https://i.pravatar.cc/150?u=',
    },
    {
      name: 'Tim',
      lastName: 'Berners-Lee',
      grade: 10,
      isApproved: true,
      email: 'tim@coding.com',
      photo: 'https://i.pravatar.cc/150?b=',
    },
    {
      name: 'Alan',
      lastName: 'Turing',
      grade: 10,
      isApproved: true,
      email: 'alan@coding.com',
      photo: 'https://i.pravatar.cc/150?h=',
    },
    {
      name: 'Linus',
      lastName: 'Torvalds',
      grade: 8,
      isApproved: true,
      email: 'linus@coding.com',
      photo: 'https://i.pravatar.cc/150?l=',
    },
    {
      name: 'Steve',
      lastName: 'Steven',
      grade: 4,
      isApproved: false,
      email: 'steve@coding.com',
      photo: 'https://i.pravatar.cc/150?f=',
    },
  ];
}
