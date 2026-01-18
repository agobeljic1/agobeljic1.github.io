import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../projects.data';

@Component({
  selector: 'app-project-details-dialog',
  templateUrl: './project-details-dialog.component.html',
  styleUrls: ['./project-details-dialog.component.scss'],
})
export class ProjectDetailsDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<ProjectDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {}

  close() {
    this.dialogRef.close();
  }
}

