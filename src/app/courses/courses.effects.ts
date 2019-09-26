import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CourseActions } from "./action-types";
import { concatMap, map } from "rxjs/operators";
import { CoursesHttpService } from "./services/courses-http.service";
import { allCoursesLoaded } from "./course.actions";

@Injectable()
export class CoursesEffects {

  loadCourses$ = createEffect(
    () => this.actions$
          .pipe(
            ofType(CourseActions.loadAllCourses),
            concatMap(action => this.courseHttpService.findAllCourses()),
            map(courses => allCoursesLoaded({courses}))
          )
  );

  constructor(private actions$: Actions,
    private courseHttpService: CoursesHttpService) {

  }
}