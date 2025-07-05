import mongoose from "mongoose";

export async function connectToTheDatabase() {
  const MONGOURI = process.env.MONGO_URI;

  if (!MONGOURI) {
    console.log(
      "Error with the Mongo URL, please check your environment variables..."
    );
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGOURI, {
      serverSelectionTimeoutMS: 1000,
      socketTimeoutMS: 1000,
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Database connected successfully...");
    });

    connection.on("error", (err) => {
      console.log("Error while connecting to the database... " + err);
      process.exit(1);
    });
  } catch (error) {
    console.log("Error occurred during database connection..." + error);
    process.exit(1);
  }
}
