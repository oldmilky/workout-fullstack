import asyncHandler from "express-async-handler";
import { userFields } from "../../utils/user.utils.js";
import { Prisma } from "../prisma.js";

// desc - Get user profile
// route - Get /api/users/profile
// access - Private

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await Prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    select: userFields,
  });

  const countExerciseTimesCompleted = await Prisma.exerciseLog.count({
    where: {
      userId: req.user.id,
      isCompleted: true,
    },
  });

  const kgs = await Prisma.exerciseTime.aggregate({
    where: {
      exerciseLog: {
        userId: req.user.id,
      },
      isCompleted: true,
    },
    _sum: {
      weight: true,
    },
  });

  const workouts = await Prisma.workoutLog.count({
    where: {
      userId: user.id,
      isCompleted: true,
    },
  });

  res.json({
    ...user,
    statistics: [
      {
        label: "Minutes",
        value: Math.ceil(countExerciseTimesCompleted * 2.3),
      },
      {
        label: "Workouts",
        value: workouts,
      },
      {
        label: "Kgs",
        value: kgs._sum.weight || 0,
      },
    ],
  });
});
