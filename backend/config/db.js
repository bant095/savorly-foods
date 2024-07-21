import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://abolajiayodeji93:244622@cluster0.hbzol1f.mongodb.net/savorly'
    )
    .then(() => console.log('DB Connected'));
};
