import { MuscularGroup } from '../../../database/models';
import user from '../../../database/models/user';

const muscularGroupQueries = {
  muscularGroups: async (_, args) => {
    return await MuscularGroup.find();
  },
  muscularGroup: async (_, {id}) => {
    return await  MuscularGroup.findById(id)
  },
  muscularGroupAuthor: async (_, {id}) => {
    const muscularGroups = MuscularGroup.find({author:id})
  /*   if (workouts) throw new Error('Error en la busqueda del author') */
    return await muscularGroups;
  },
  muscularGroupCount: () => MuscularGroup.collection.countDocuments(),
};

export default muscularGroupQueries;
