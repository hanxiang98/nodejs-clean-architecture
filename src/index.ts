import express from "express";
import { errorHandler } from "./web/middlewares/errorHandler";
import { routes } from "./web/routes";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";

const app = express();

app.use(express.json());
app.use("/", routes);
app.use(errorHandler);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});