import { Schema, model, Document, Types } from "mongoose";
import { OrganisationModel, IOrganisation } from "./organisation.model";
// Badge Interface
interface IBadge extends Document {
  badgeUID: string;
  badgeName: string;
  badgeDescription: string;
  badgeCreatedOn: Date;
  badgeIssuer: Types.ObjectId;
}

// Issuance Interface
interface IIssuance extends Document {
  badge: Types.ObjectId; // Reference to the badge being issued
  user: Types.ObjectId; // Reference to the user receiving the badge
  issuanceUID: string; // Unique identifier for each issuance
  issuedBy: Types.ObjectId; // Reference to the Admin who issued the badge
  issuedOn: Date;
}

// User Interface
interface IUser extends Document {
  username: string;
  email: string;
  badges: Types.ObjectId[]; // References to the issuances a user has received
}

// Badge Schema
const BadgeSchema: Schema<IBadge> = new Schema<IBadge>({
  badgeUID: { type: String, required: true, unique: true },
  badgeName: { type: String, required: true },
  badgeDescription: { type: String, required: true },
  badgeCreatedOn: { type: Date, default: Date.now, required: true },
  badgeIssuer : {type: Schema.Types.ObjectId , ref : "Organisation",required:true}
});

// Issuance Schema
const IssuanceSchema: Schema<IIssuance> = new Schema<IIssuance>({
  badge: { type: Schema.Types.ObjectId, ref: "Badge", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  issuanceUID: { type: String, required: true, unique: true },
  issuedBy: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
  issuedOn: { type: Date, default: Date.now, required: true },
});

// User Schema
const UserSchema: Schema<IUser> = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  badges: [{ type: Schema.Types.ObjectId, ref: "Issuance" }],
});

const BadgeModel = model<IBadge>("Badge", BadgeSchema);
const IssuanceModel = model<IIssuance>("Issuance", IssuanceSchema);
const UserModel = model<IUser>("User", UserSchema);

export { BadgeModel, IssuanceModel, UserModel };
