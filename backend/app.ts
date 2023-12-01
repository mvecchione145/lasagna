import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DATABASE_URL!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const schemaFileSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  description: String
});
schemaFileSchema.index({ name: 1 });

const configFileSchema = new mongoose.Schema({
  fileName: String,
  data: Object,
  schemaId: String
});
configFileSchema.index({ schemaId: 1 });

const SchemaFile = mongoose.model('SchemaFile', schemaFileSchema);
const ConfigFile = mongoose.model('ConfigFile', configFileSchema);

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
}));


app.get("/schemas", async (req: express.Request, res: express.Response) => {
  try {
    const schemaFiles = await SchemaFile.find().select('name _id description').exec();
    res.json(schemaFiles);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});


app.get("/configs/:schemaId", async (req: express.Request, res: express.Response) => {
  try {
    const configFiles = await ConfigFile.find({ schemaId: req.params.schemaId }).select('fileName _id').exec();

    if (!configFiles.length) {
      return res.status(404).send('Configuration file not found.');
    }
    res.json(configFiles);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});


app.get("/schema/:schemaId", async (req: express.Request, res: express.Response) => {
  try {
    const schemaFile = await SchemaFile.findOne({ _id: req.params.schemaId }).exec();

    if (!schemaFile) {
      return res.status(404).send('Schema file not found.');
    }
    res.json(schemaFile);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = parseInt(process.env.PORT!);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
