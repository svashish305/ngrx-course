import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

// export const isLoggedIn = createSelector(
//   state => state["auth"],  // mapping fn
//   (auth) => !!auth.user      // projector fn
// );

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => !!auth.user      // projector fn
);

export const isLoggedOut = createSelector(
  isLoggedIn,              // can reuse isLoggedIn as mapping fn
  loggedIn => !loggedIn
);