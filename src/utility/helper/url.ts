/**
 * The function `validateAndConfigureURL` takes a URL as input, validates it, and returns the URL with
 * the protocol changed to "https" if it was originally "http".
 * @param {string | undefined} url - The `url` parameter is a string that represents a URL. It can be
 * either an HTTP or HTTPS URL.
 * @returns The function `validateAndConfigureURL` returns a string if the input `url` is valid and
 * starts with either "http:" or "https:". If the input `url` is undefined or does not match the
 * pattern, the function returns undefined.
 */
export const validateAndConfigureURL = (url: string | undefined): string | undefined  => {
    const urlPattern = /^(http:|https:)/;
    if (!url) return undefined 
    if (!urlPattern.test(url)) {
        return undefined
    }
    return url.replace(/^http:/, 'https:');
    
}