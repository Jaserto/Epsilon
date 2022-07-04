import { MuscularGroup } from '../../../database/models';

const muscularGroupMutations = {
  createMuscularGroup: async (_, {MuscularGroup}) => {
    const newMuscularGroup= new MuscularGroup(MuscularGroup)
    return await newMuscularGroup.save()
  },
  updateMuscularGroup: async (_, { id, MuscularGroup }) => {
    const updatedMuscularGroup = await MuscularGroup.findByIdAndUpdate(
      id,
      {
        $set: { ...MuscularGroup },
      },
      { new: true }
    );

    return updatedMuscularGroup;
  },
};
export default muscularGroupMutations;
