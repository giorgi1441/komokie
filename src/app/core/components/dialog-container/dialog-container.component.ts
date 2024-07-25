import { Component, inject, signal } from '@angular/core';
import { CdkDialogContainer, DialogRef } from "@angular/cdk/dialog";
import { CdkPortalOutlet } from "@angular/cdk/portal";

@Component({
  selector: 'app-dialog-container',
  standalone: true,
  imports: [
    CdkPortalOutlet
  ],
  templateUrl: './dialog-container.component.html',
  styleUrl: './dialog-container.component.css',
  host: {
    'aria-haspopup': 'dialog',
    style: 'width: 100%'
  },
})
export class DialogContainerComponent extends CdkDialogContainer {
  private readonly _dialogRef: DialogRef = inject(DialogRef);
  data = signal<{ title: string }>(this._config.data ? this._config.data as { title: string } : { title: '' });

  closeDialog(): void {
    this._dialogRef.close();
  }
}
