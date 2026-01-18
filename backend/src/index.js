import "dotenv/config";

import app from "server.js";
import initMongoDB from "./src/db/initMongoDB.js";
import { getEnvVar } from "./src/utils/getEnvVar.js";

const PORT = Number(getEnvVar("PORT", "3000"));

const bootstrap = async () => {
  await initMongoDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

bootstrap();
