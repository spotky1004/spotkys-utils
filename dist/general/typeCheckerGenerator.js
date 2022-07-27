/**
 * Generate type checker for js types
 */
;
export default function typeCheckerGenerator(types) {
    function typeChecker(toCheck) {
        return types.includes(typeof toCheck);
    }
    return typeChecker;
}
