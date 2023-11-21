import { Schema, model, Document } from "mongoose";

// Organisation Interface
interface IOrganisation extends Document {
  name: string;
  description: string;
  size ?: string;
}

// Organisation Schema
const OrganisationSchema: Schema<IOrganisation> = new Schema<IOrganisation>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  size : {type:String},
  // Define other fields as needed
});

const OrganisationModel = model<IOrganisation>(
  "Organisation",
  OrganisationSchema
);

export { OrganisationModel, IOrganisation };
