import hyRequest from '../request'
export function getAllCity() {
    return hyRequest.get({
        url: '/city/all'
    });
}
