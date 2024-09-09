export const cleanHomepage = (url:string) => {
    if(url.startsWith('https://')) {
        url = url.substring(8);
    }

    if(url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    
    return url;
}