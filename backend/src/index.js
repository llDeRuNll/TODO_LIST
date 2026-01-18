import "dotenv/config";

import app from "./app.js";
import initMongoDB from "./db/initMongoDB.js";
import { getEnvVar } from "./utils/getEnvVar.js";

const PORT = Number(getEnvVar("PORT", "3000"));

const bootstrap = async () => {
  await initMongoDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

bootstrap();
