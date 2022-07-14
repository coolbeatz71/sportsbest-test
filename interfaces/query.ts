export interface ICategory {
    id: string;
    name?: any;
    slug: string;
}

export interface ISelection {
    id: string;
    name: string;
    odds?: number;
}

export interface IMarket {
    id: string;
    name: string;
    selections: ISelection[];
}

export interface ICompetitor {
    id: string;
    score: number;
    name: string;
}

export interface IEvent {
    id: string;
    startTime: string;
    category: ICategory;
    markets: IMarket[];
    competitors: ICompetitor[];
}

export interface IEventResult {
    events: IEvent[];
}
