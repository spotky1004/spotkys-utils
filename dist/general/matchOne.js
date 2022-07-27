export default function matchOne(str, matcher, groupNr) {
    const matches = str.match(matcher);
    if (matches == null)
        return undefined;
    if (typeof groupNr !== "undefined") {
        return matches[groupNr];
    }
    else {
        return matches[0];
    }
}
