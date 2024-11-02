import hyRequest from '../request'
export function getHomeSuggests() {
    return hyRequest.get({
        url: '/home/hotSuggests'
    });
}

export function getCategories() {
    return hyRequest.get({
        url: '/home/categories'
    });
}
