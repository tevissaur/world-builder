export interface Religion {
    gods: Array<God>;
    _id: string;
    name: string;
}

export interface God {
    _id: string;
    description: string;
    name: string;
    domains: Array<string>;
    alignment: string;
    symbol: string;
}