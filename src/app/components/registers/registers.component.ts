import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ModuleRegistry, type ColDef } from 'ag-grid-community';
import { RegisterDetailsComponent } from '../register-details/register-details.component';
import { MatDialog } from '@angular/material/dialog';

ModuleRegistry.registerModules([AllCommunityModule]);

export interface Register {
  registerFirstName: string,
  registerLastName: string,
  registerId: number,
  lessonName: string,
  price: number,
  isPaid: boolean
}

@Component({
  selector: 'app-registers',
  imports: [AgGridAngular],
  templateUrl: './registers.component.html',
  styleUrl: './registers.component.css'
})

export class RegistersComponent {
  constructor(private dialog: MatDialog) {}

  paginationAutoPageSize = true;

  colDefs: ColDef[] = [
    { field: 'registerFirstName', headerName: 'First Name', filter: 'agTextColumnFilter', filterParams: { filterOptions: ['contains'] } },
    { field: 'registerLastName', headerName: 'Last Name', filter: 'agTextColumnFilter', filterParams: { filterOptions: ['contains'] } },
    { field: 'registerId', headerName: 'ID', filter: 'agNumberColumnFilter', filterParams: { filterOptions: ['equals'] } },
    { field: 'lessonName', headerName: 'Lesson Name', filter: 'agTextColumnFilter', filterParams: { filterOptions: ['contains'] } },
    { field: 'price', headerName: 'Price', filter: 'agNumberColumnFilter', filterParams: { filterOptions: ['equals', 'lessThan', 'greaterThan'] } },
    { field: 'isPaid', headerName: 'Is Paid?', filter: 'agSetColumnFilter', filterParams: { values: ['true', 'false'] } },
    {
      headerName: 'details',
      cellRenderer: (params: any) => {
        const button = document.createElement('button');
        button.innerText = 'details';
        button.classList.add('btn');
        button.addEventListener('click', () => this.openDialog(params.data));
        return button;
      }
    }
  ];

  rowData: Register[] = [
    { registerFirstName: "Sarah", registerLastName: "Levi", registerId: 123456789, lessonName: "Math Basics", price: 100, isPaid: true },
    { registerFirstName: "Tamar", registerLastName: "Azoulay", registerId: 234567890, lessonName: "Creative Writing", price: 90, isPaid: false },
    { registerFirstName: "Noa", registerLastName: "Ben David", registerId: 345678901, lessonName: "English Reading", price: 120, isPaid: true },
    { registerFirstName: "Rachel", registerLastName: "Shalom", registerId: 456789012, lessonName: "Art and Colors", price: 80, isPaid: true },
    { registerFirstName: "Maya", registerLastName: "Peretz", registerId: 567890123, lessonName: "Science Discovery", price: 110, isPaid: false },
    { registerFirstName: "Yael", registerLastName: "Abutbul", registerId: 678901234, lessonName: "Basic Chemistry", price: 100, isPaid: true },
    { registerFirstName: "Lior", registerLastName: "Mizrahi", registerId: 789012345, lessonName: "Nature Walks", price: 70, isPaid: false },
    { registerFirstName: "Shani", registerLastName: "Elbaz", registerId: 890123456, lessonName: "History Time", price: 95, isPaid: true },
    { registerFirstName: "Eden", registerLastName: "Sharabi", registerId: 901234567, lessonName: "English Speaking", price: 105, isPaid: true },
    { registerFirstName: "Or", registerLastName: "Kalif", registerId: 112345678, lessonName: "Computer Basics", price: 100, isPaid: false }
  ];

  openDialog(register: any) {
    this.dialog.open(RegisterDetailsComponent, {
      data: register,
    });
  }

}
