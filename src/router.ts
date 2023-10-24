import { createBrowserRouter } from "react-router-dom";
import { homeRouter } from "./modules/home/Home.router";
import { scanRouter } from "./modules/scan/Scan.router";

export const router = createBrowserRouter([homeRouter, scanRouter]);