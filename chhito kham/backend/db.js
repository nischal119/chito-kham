import mongoose from "mongoose";

const mongoUrl =
  "mongodb+srv://dhungeln12:nischal2468@clusterchitokham.ac7ctfc.mongodb.net/chito_kham?retryWrites=true&w=majority";

export const mongoDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("DB sucessfully connected");
    const fetched_data = mongoose.connection.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    // console.log(data);
  } catch (error) {
    console.log("DB connection failed", error);
  }
};
