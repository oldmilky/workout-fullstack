import asyncHandler from "express-async-handler";
import { Prisma } from "../../prisma.js";

// desc - Update workout log completed
// route - PATCH /api/workouts/log/completed/:id
// access - Private
export const updateCompleteWorkoutLog = asyncHandler(async (req, res) => {

  try {
    const workoutLog = await Prisma.workoutLog.update({
      where: {
        id: +req.params.id,
      },
      data: {
        isCompleted: true
      },
    });

    res.json(workoutLog);
  } catch (error) {
    res.status(404);
    throw new Error("workout log not found!");
  }
});

// desc - Update status of complete workout log
// route - PATCH /api/workouts/log/completed
// access - Private
export const completeWorkoutLog = asyncHandler(async (req, res) => {
  const { isCompleted } = req.body;

  try {
    const workoutLog = await Prisma.workoutLog.update({
      where: {
        id: +req.params.id,
      },
      data: {
        isCompleted,
      },
      include: { workout: true, workoutLog: true },
    });

    res.json(workoutLog);
  } catch (error) {
    res.status(404);
    throw new Error("workout log not found!");
  }
});
