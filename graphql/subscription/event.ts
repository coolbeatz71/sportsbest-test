const UPDATE_EVENT_SUBSCRIPTION = `
subscription UpdateEvent ($eventId: ID!) {
    eventUpdate(eventId: $eventId) {
        id
        startTime
        category {
            id
            name
            slug
        }
        competitors {
            id
            name
            score
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
    }
}
`;
export default UPDATE_EVENT_SUBSCRIPTION;
