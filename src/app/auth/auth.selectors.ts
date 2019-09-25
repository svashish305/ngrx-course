import { createSelector } from "@ngrx/store";

export const isLoggedIn = createSelector(
  state => state["auth"],  // mapping fn
(auth) => !!auth.user      // projector fn
);

export const isLoggedOut = createSelector(
  isLoggedIn,              // can reuse isLoggedIn as mapping fn
  loggedIn => !loggedIn
);