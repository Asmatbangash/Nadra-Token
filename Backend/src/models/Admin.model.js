import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  manageTokens: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Token',
  },
});

export const Admin = mongoose.model('Admin', adminSchema);
