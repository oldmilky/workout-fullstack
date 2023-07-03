import asyncHandler from "express-async-handler";
import { Prisma } from "../prisma.js";
import { calculateMinute } from "./calculate-minute.js";

// desc - Create new workout
// route - POST /api/workouts
// access - Private
export const createNewWorkout = asyncHandler(async (req, res) => {
  const { name, exerciseIds } = req.body;

  const workout = await Prisma.workout.create({
    data: {
      name,
      exercises: {
        connect: exerciseIds.map(id => ({ id: id })),
      },
    },
  });

  res.json(workout);
});

// desc - Get workouts
// route - GET /api/workouts
// access - Private
export const getWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Prisma.workout.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      exercises: true,
    },
  });

  res.json(workouts);
});

// desc - Get workout
// route - GET /api/workouts/:id
// access - Private
export const getWorkout = asyncHandler(async (req, res) => {
  const workout = await Prisma.workout.findUnique({
    where: { id: +req.params.id },
    include: {
      exercises: true,
    },
  });

  if (!workout) {
    res.status(404);
    throw new Error("Workout not found!");
  }

  const minutes = calculateMinute(workout.exercises.length)

  res.json({ ...workout, minutes });
});

// @desc    Update workout
// @route 	PUT /api/workouts/:id
// @access  Private
export const updateWorkout = asyncHandler(async (req, res) => {
  const { name, exerciseIds } = req.body;

  try {
    const workout = await Prisma.workout.update({
      where: {
        id: +req.params.id,
      },
      data: {
        name,
        exercises: {
          set: exerciseIds.map(id => ({ id: id })),
        },
      },
    });

    res.json(workout);
  } catch (error) {
    res.status(404);
    throw new Error("Workout not found");
  }
});

// @desc    Delete workout
// @route 	DELETE /api/workout/:id
// @access  Private
export const deleteWorkout = asyncHandler(async (req, res) => {
  try {
    const workout = await Prisma.workout.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({ message: "Exercise deleted!" });
  } catch (error) {
    res.status(404);
    throw new Error("Exercise not found");
  }
});
