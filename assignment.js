// Quick Question #1
    // Answer: {1, 2, 3, 4}

// Quick Question #2
    // Answer: "ref"

// Quick Question #3
    // Answer: Map m would be {[1,2,3] => true, [1,2,3] => false}

// hasDuplicate:
function hasDuplicate(arr) {
    return new Set(arr).size === arr.length ? false : true; 
}

// vowelCount:

function vowelCount(string) {
    const newMap = new Map();
    const stringLow = string.toLowerCase();
    for (const char of stringLow) {
        if ('aeiou'.indexOf(char) > -1) {
            if (newMap.has(char)) {
                const count = newMap.get(char) + 1;
                newMap.set(char, count);
            } else{
                newMap.set(char, 1);
            }
        }
    }
    return newMap;
}