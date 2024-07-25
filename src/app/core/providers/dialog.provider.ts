import { Provider } from "@angular/core";
import { DEFAULT_DIALOG_CONFIG } from "@angular/cdk/dialog";
import { DialogContainerComponent } from "../components/dialog-container/dialog-container.component";

export const provideDialog = (): Array<Provider> => [
  {
    provide: DEFAULT_DIALOG_CONFIG,
    useValue: {
      container: DialogContainerComponent,
      backdropClass: [ 'bg-alpha-700', 'backdrop-blur-md' ],
      hasBackdrop: true,
      disableClose: true
    }
  }
]
