import { Schema, model, connect, Document } from 'mongoose';

interface IBadge extends Document {
    badgeUID: string;
    badgeIssuer: string;
    badgeCreatedOn: Date;
    badgeIssued: Date;
    receiver: string; 
}

const BadgeSchema: Schema<IBadge> = new Schema<IBadge>({
    badgeUID: { type: String, required: true },
    badgeIssuer: { type: String, required: true },
    badgeCreatedOn: { type: Date, required: true },
    badgeIssued: { type: Date, default: Date.now, required: true },
    receiver: { type: String, required: true }
});

const BadgeModel = model<IBadge>('Badge', BadgeSchema);

export { BadgeModel };
