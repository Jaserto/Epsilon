import { Schema, model, mongoose } from "mongoose";

const ExerciseSchema = new Schema(
    {
      name: { 
        type: String, 
        required: true,
        unique:true
      },
      muscularGroup: {
        type: Schema.Types.ObjectId,
        ref: "MuscularGroup",
        required:true,
      },
      status: {
        type: Boolean,
        trim:true,
        default: true,
      },
      author: {
        type: Schema.Types.ObjectId,
        trim:true,
        ref: 'User'
      }
    },
    {
      timestamps: true,
    }
  );
  

export default model("Exercise", ExerciseSchema);
