import { Schema, model, Document, Types, SchemaType } from "mongoose";
import { OrganisationModel, IOrganisation } from "./organisation.model";
// Badge Interface
interface IBadge extends Document {
  badgeUID: string;
  badgeName: string;
  badgeDescription: string;
  badgeCreatedOn: Date;
  badgeIssuer: String;
}

// Issuance Interface
interface IIssuance extends Document {
  badge: Types.ObjectId; // Reference to the badge being issued
  reciever: Types.ObjectId; // Reference to the user receiving the badge
  issuanceUID: string; // Unique identifier for each issuance
  issuedBy: string;
  issuedOn: Date;
}

// User Interface
interface IUser extends Document {
  email: string;
  password: string;
  token: string;
  organisation : string;
  badges: Types.ObjectId[]; // References to the issuances a user has received
}

// Badge Schema
const BadgeSchema: Schema<IBadge> = new Schema<IBadge>({
  badgeUID: { type: String, required: true, unique: true },
  badgeName: { type: String, required: true },
  badgeDescription: { type: String, required: true },
  badgeCreatedOn: { type: Date, default: Date.now, required: true },
  badgeIssuer: { type: String, required: true },
});

// Issuance Schema
const IssuanceSchema: Schema<IIssuance> = new Schema<IIssuance>({
  badge: { type: Schema.Types.ObjectId, ref: "Badge", required: true },
  reciever: { type: Schema.Types.ObjectId, ref: "User", required: true },
  issuanceUID: { type: String, required: true, unique: true },
  issuedBy: { type: String, required: true },
  issuedOn: { type: Date, default: Date.now, required: true },
});

// User Schema
const UserSchema: Schema<IUser> = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password : {type:String,required:true,unique:true},
  badges: [{ type: Schema.Types.ObjectId, ref: "Issuance" }],
  organisation : {type:String,required:true,unique:true},
  token : {type:String}
});

const BadgeModel = model<IBadge>("Badge", BadgeSchema);
const IssuanceModel = model<IIssuance>("Issuance", IssuanceSchema);
const UserModel = model<IUser>("User", UserSchema);

export { BadgeModel, IssuanceModel, UserModel };
