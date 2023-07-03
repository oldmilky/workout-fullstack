import AuthPage from "../pages/Auth";
import ExercisePage from "../pages/Exercise";
import HomePage from "../pages/Home";
import NewExercisePage from "../pages/NewExercise";
import NewWorkoutPage from "../pages/NewWorkout";
import ProfilePage from "../pages/Profile";
import WorkoutPage from "../pages/Workout";
import WorkoutsPage from "../pages/Workouts";

export const routes = [
  {
    path: "/auth",
    component: AuthPage,
    isAuth: false,
  },
  {
    path: "/",
    component: HomePage,
    isAuth: true,
  },
  {
    path: "/profile",
    component: ProfilePage,
    isAuth: true,
  },
  {
    path: "/workouts",
    component: WorkoutsPage,
    isAuth: true,
  },
  {
    path: "/workout/:id",
    component: WorkoutPage,
    isAuth: true,
  },
  {
    path: "/exercise/:id",
    component: ExercisePage,
    isAuth: true,
  },
  {
    path: "/new-workout",
    component: NewWorkoutPage,
    isAuth: true,
  },
  {
    path: "/new-exercise",
    component: NewExercisePage,
    isAuth: true,
  },
];
