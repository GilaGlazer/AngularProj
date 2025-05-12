import { Injectable } from '@angular/core';

export interface User {
  userName: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataUsersService {
  private usersList: User[] = [
    { userName: 'g', password: '1', role: 'Secretary' },
    { userName: 'm', password: '2', role: 'Teacher' },
    { userName: 'Sarah Biton', password: '1234', role: 'Secretary' },
    { userName: 'Yael Malka', password: '2345', role: 'Teacher' },
    { userName: 'Rachel Cohen', password: '3456', role: 'Teacher' },
    { userName: 'Tamar Levi', password: '4567', role: 'Secretary' },
    { userName: 'Noa Zehavi', password: '5678', role: 'Teacher' },
    { userName: 'Hila Ron', password: '6789', role: 'Secretary' },
    { userName: 'Rivka Dayan', password: '7890', role: 'Teacher' },
    { userName: 'Vered Nachum', password: '8901', role: 'Secretary' },
    { userName: 'Shira Saban', password: '9012', role: 'Teacher' },
    { userName: 'Lital Avraham', password: '0123', role: 'Secretary' },
    { userName: 'Michal Halevi', password: '1478', role: 'Teacher' },
    { userName: 'Nurit Azulai', password: '2589', role: 'Secretary' },
    { userName: 'Hadas Peretz', password: '3690', role: 'Teacher' },
    { userName: 'Tali Weinstein', password: '1597', role: 'Secretary' },
    { userName: 'Gila Kadush', password: '7531', role: 'Teacher' },
    { userName: 'Lea Golan', password: '9514', role: 'Secretary' },
    { userName: 'Miri Yitzhak', password: '3579', role: 'Teacher' },
    { userName: 'Dina Cohen', password: '45678', role: 'Secretary' },
    { userName: 'Ronit Wolf', password: '56789', role: 'Teacher' },
    { userName: 'Zohar Barak', password: '67890', role: 'Secretary' }
  ];

  constructor() { }

  getUsers(): User[] {
    return this.usersList;
  }

  addUser(user: User): void {
    this.usersList.push(user);
  }

  findUser(name: string,password:string): User | undefined {
    return this.usersList.find(u => u.userName === name&&u.password===password);
  }

  clearUsers(): void {
    this.usersList = [];
  }
}

