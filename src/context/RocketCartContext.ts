import { createContext } from "react";
import { Rocket } from "../dataAccess/useGetRocket";

export const RocketContext = createContext<Rocket | null>(null);
