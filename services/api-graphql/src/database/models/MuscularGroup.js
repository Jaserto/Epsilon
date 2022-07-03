import { Schema, model, mongoose } from "mongoose";

const MuscularGroupSchema = new Schema(
    {
      name: { 
        type: String, 
        required: true, 
        unique:true
      },
      status: {
        type: Boolean,
        trim:true
      },
      user: {
        type: Schema.Types.ObjectId,
        trim:true,
        ref: 'User'
      },
    },
    {
      timestamps: true,
    }
  );
  

export default model("MuscularGroup", MuscularGroupSchema);
