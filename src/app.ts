import * as express from "express";
import * as bodyParser from "body-parser";
import productRouter from "./Controllers/productController";

/**
 * PRODUCT SERVICE
 * The product service will enable you to get data from the master database.
 * Has a single endpoint:
 * - /api/product
 *   Here you can GET the data you query. Returns a list of products matching the query.
 */
class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // Setup routes
    this.setRoutes();
  }

  /** Sets the router for /api/product */
  private setRoutes(): void {
    this.app.use("/api/product", productRouter);
  }
}

export default new App().app;
