export interface Race {
    name: string;
    description: string;
}

export interface Class {
    name: string;
    description: string;
}


export interface Character {
    name: string;
    description: string;
    size: string;
    race: Race;
    class: Class;
    backstory: string;
    bonds: [];
    goals: [];
    fears: [];
}