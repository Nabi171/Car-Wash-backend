import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {
    const databaseUrl: string =
      "mongodb+srv://admin-um:DUzcnjyjHRYVn6DZ@cluster0.elqsdp0.mongodb.net/first-project?retryWrites=true&w=majority&appName=Cluster0";
    // await mongoose.connect(config.database_url as string);
    await mongoose.connect(databaseUrl);
    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
