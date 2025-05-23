import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    fatherName: {
      type: String,
      required: true,
      trim: true,
    },
    serviceType: {
      type: String,
      enum: [
        'cnic',
        'nicop',
        'frc',
        'childReg',
        'poc',
        'deathCert',
        'birthCert',
        'smartCard',
      ],
      required: true,
    },
    contactNo: {
      type: Number,
      required: true,
      trim: true,
    },
    TokenNo: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Token = mongoose.model('Token', tokenSchema);
