// Idk why I decided that none of these toy examples should implicitly
// convert types expect that it gives me concrete test cases to write.

export function arrayLength(array) {
    if (!Array.isArray(array)) return undefined;
    return array.length;
}

export function thirdItem(array) {
    if (!Array.isArray(array)) return undefined;
    return array[2];
}

export function firstKeyLastValue(obj) {
    if (typeof obj !== 'object') {
        return {
            firstKey: undefined,
            lastValue: undefined,
        };
    }
    return {
        firstKey: Object.keys(obj)[0],
        lastValue: Object.values(obj).slice(-1)[0],
    };
}

export function inventoryChecker(inv, { itemName }) {
    return inv[itemName] > 5
        ? 'plenty of inventory'
        : `running low on ${itemName}`;
}
