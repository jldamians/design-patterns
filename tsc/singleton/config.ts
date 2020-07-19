import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export default {
    singleton: process.env.SINGLETON_CLASS,
};