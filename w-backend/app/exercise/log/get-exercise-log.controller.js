import asyncHandler from "express-async-handler";
import { Prisma } from "../../prisma.js";
import { addPrevValues } from "./add-prev-values.util.js";

// desc - Get exerciseLog
// route - GET /api/exercises/log/:id
// access - Private
export const getExercisesLog = asyncHandler(async (req, res) => {
  const exerciseLog = await Prisma.exerciseLog.findUnique({
    where: {
      id: +req.params.id,
    },
    include: {
      exercise: true,
      times: {
        orderBy: {
          id: "asc",
        },
      },
    },
  });

  if (!exerciseLog) {
    res.status(404);
    throw new Error("Exercise log not found");
  }

  const prevExerciseLog = await Prisma.exerciseLog.findFirst({
    where: {
      exerciseId: exerciseLog.exerciseId,
      userId: req.user.id,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      times: true,
    },
  });

  res.json({
    ...exerciseLog,
    times: addPrevValues(exerciseLog, prevExerciseLog),
  });
});
