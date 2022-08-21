import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const url = 'mongodb+srv://serhii:serhii123@cluster0.c2pqfo2.mongodb.net/?retryWrites=true&w=majority'

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(con => console.log('Connected to database'));
};

export default dbConnect;
