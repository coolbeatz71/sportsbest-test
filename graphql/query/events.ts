const GET_EVENTS_QUERY = `
    query GetEvents ($first: Int) {
        events(first: $first) {
            id
            startTime
            category {
                id
                name
                slug
            }
            markets {
                id
                name
                selections {
                    id
                    name
                    odds
                }
            }
            competitors {
                id
                score
                name
            }
        }
    }
`;

export const GET_ALL_EVENTS_QUERY = `
    query GetAllEvents {
        events {
            id
            startTime
            category {
                id
                name
                slug
            }
            markets {
                id
                name
                selections {
                    id
                    name
                    odds
                }
            }
            competitors {
                id
                score
                name
            }
        }
    }
`;

export default GET_EVENTS_QUERY;
