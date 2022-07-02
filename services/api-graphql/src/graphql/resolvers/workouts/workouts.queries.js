import { Workout } from '../../../database/models';
import user from '../../../database/models/user';

const workoutQueries = {
  workouts: async (_, args) => {
    return await Workout.find();
  },
  workout: async (_, {id}) => {
    return await  Workout.findById(id)
  },
  workoutWeight: async (_, {id}) => {
    const workouts = Workout.find({author:id})
  /*   if (workouts) throw new Error('Error en la busqueda del author') */
    return await workouts;
  },
  workoutsCount: () => Workout.collection.countDocuments(),
};

export default workoutQueries;
