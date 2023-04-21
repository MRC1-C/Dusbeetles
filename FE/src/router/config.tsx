import { ReactNode } from "react";

export type RouteType = {
    index?: boolean,
    path: string,
    element: ReactNode,
    child?: RouteType[],
    label?: string,
    state?: string,
};