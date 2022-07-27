export default function matchOne(str: string, matcher: RegExp | string, groupNr?: number): string | undefined {
  const matches = str.match(matcher);
  if (matches == null) return undefined;
  if (typeof groupNr !== "undefined") {
    return matches[groupNr];
  } else {
    return matches[0];
  }
}
