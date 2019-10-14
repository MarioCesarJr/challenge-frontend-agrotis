export function addRecord(name, description) {
    return {
        type: 'ADD_RECORD',
        payload: { name, description },
    };
}
