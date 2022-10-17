export interface Race {
    name: string;
    description: string;
}

export interface Class {
    name: string;
    description: string;
}


export interface Character {
    _id?: string;
    name: string;
    description: string;
    size: string;
    race: Race;
    class: Class;
    backstory: string;
    bonds: [];
    goals: [];
    fears: [];
    isNPC: boolean;
}