import { Schema, model } from "mongoose";
import { TSkill, TSkillModel } from "./skill.interface";
import { skillsEnums } from "../../global/global.constant";

const skillSchema = new Schema<TSkill>(
  {
    title: { type: String, required: true },
    logo: { type: String, required: true },
    type: { type: String, required: true, enum: skillsEnums },
    description: { type: String, required: true },
    percentage: { type: Number, required: true },
  },
  { timestamps: true }
);

const SkillModel = model<TSkill, TSkillModel>("Skill", skillSchema);

export default SkillModel;
