import { World } from "./IWorld";

export interface User {
    username: string;
    worlds: Array<World>
}