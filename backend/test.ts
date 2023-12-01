import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL!);

interface ISchemaFile {
  name: string;
  data: Buffer;
}

interface IConfigFile {
  fileName: string;
  data: Record<string, unknown>;
  schemaId: string;
}

const SchemaFile = mongoose.model<ISchemaFile>('SchemaFile', new mongoose.Schema({
  name: String,
  data: Buffer
}));

const ConfigFile = mongoose.model<IConfigFile>('ConfigFile', new mongoose.Schema({
  fileName: String,
  data: Object,
  schemaId: String
}));

(async () => {
  try {
    const schemaId = "6565f26877fa4e4ca6004bbc";
    const configFiles = await ConfigFile.find({ schemaId }).select('fileName _id').exec();
    console.log(configFiles);
  } catch (error) {
    console.error("An error occurred:", error instanceof Error ? error.message : error);
  } finally {
    mongoose.connection.close();
  }
})();
