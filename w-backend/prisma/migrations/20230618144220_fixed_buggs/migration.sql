/*
  Warnings:

  - You are about to drop the column `workoutLogId` on the `Exercise_log` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exercise_log" DROP CONSTRAINT "Exercise_log_workoutLogId_fkey";

-- AlterTable
ALTER TABLE "Exercise_log" DROP COLUMN "workoutLogId",
ADD COLUMN     "workout_log_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Exercise_log" ADD CONSTRAINT "Exercise_log_workout_log_id_fkey" FOREIGN KEY ("workout_log_id") REFERENCES "Workout_log"("id") ON DELETE SET NULL ON UPDATE CASCADE;
