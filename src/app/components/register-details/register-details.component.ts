import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-register-details',
  imports: [CommonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>Registrant Details</h2>
    <div mat-dialog-content class="details-container">
      <div class="detail-row"><strong>First Name:</strong> <span>{{ data.registerFirstName }}</span></div>
      <div class="detail-row"><strong>Last Name:</strong> <span>{{ data.registerLastName }}</span></div>
      <div class="detail-row"><strong>ID:</strong> <span>{{ data.registerId }}</span></div>
      <div class="detail-row"><strong>Lesson:</strong> <span>{{ data.lessonName }}</span></div>
      <div class="detail-row"><strong>Price:</strong> <span>\${{ data.price }}</span></div>
      <div class="detail-row"><strong>Paid:</strong> <span>{{ data.isPaid ? 'Yes' : 'No' }}</span></div>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-flat-button color="primary" mat-dialog-close>Close</button>
    </div>
  `,
  
})
export class RegisterDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RegisterDetailsComponent>
  ) {}
}
