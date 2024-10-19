import { Model, ObjectId } from "mongoose";

export type TSkill = {
  title: string;
  logo: string;
  type: string;
  description: string;
  percentage: number;
};

export type TSkillModel = Model<TSkill, Record<string, unknown>>;
