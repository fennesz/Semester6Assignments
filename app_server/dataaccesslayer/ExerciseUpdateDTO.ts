import { WorkoutProgram } from '../models/WorkoutProgram';
import { Exercise } from '../models/Exercise';

export interface WorkoutProgramExerciseUpdate{
    Id: string;
    exercise: ExerciseDTO;
}

export interface ExerciseDTO extends Exercise {
    index: number;
};