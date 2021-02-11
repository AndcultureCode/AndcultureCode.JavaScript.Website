/**
 * Go to a specific page or URL
 * @param givenUrl relative URL to redirect the page to
 */
const goToUrl = (givenUrl) => {
    if(givenUrl != null && givenUrl.length > 0) {
        window.location.href = givenUrl;
    }
}

export const RouteUtils = {
    goToUrl,
}
