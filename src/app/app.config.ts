import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading, withViewTransitions } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { APP_REDUCER } from "./store/app.reducer";
import { APP_EFFECTS } from "./store/app.effects";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideDialog } from "./core/providers/dialog.provider";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(APP_ROUTES, withViewTransitions(), withPreloading(PreloadAllModules)),
    provideHttpClient(withFetch()),
    provideDialog(),
    provideStore(APP_REDUCER, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictStateSerializability: true,
      }
    }),
    provideStoreDevtools({
      connectInZone: true,
      maxAge: 25,
      logOnly: !isDevMode()
    }),
    provideEffects(APP_EFFECTS)
  ]
};
