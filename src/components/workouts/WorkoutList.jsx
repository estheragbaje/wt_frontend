import React from "react";
import Workouts from "./Workouts";

import { WorkoutsStyleList } from "./WorkoutStyle";
import Search from "../common/Search";

const WorkoutList = () => {
  return (
    <WorkoutsStyleList>
      <Search placeholder="Look for a specific workout" />
      <Workouts workoutName="Custom Workout" />
    </WorkoutsStyleList>
  );
};

export default WorkoutList;
