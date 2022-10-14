import { Character, Class, Race } from "./ICharacter";
import { Region } from "./IRegion";
import { Religion } from "./IReligion";
import { User } from "./IUser";

class WorldBase {
}

export interface History {
    eventName: string;
    year: number;
    description: string;
}

export interface Category {
    name: string;
}

export interface World{
    name: string;
    creator: User;
    religions: Array<Religion>;
    classes: Array<Class>;
    races: Array<Race>;
    regions: Array<Region>;
    historicalEvents: Array<History>;
    wikiCategories: Array<Category>;
    description: string;
    characters: Array<Character>;
}