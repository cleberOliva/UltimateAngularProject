export const API = {
    default: 'http://agdatabox.md.utfpr.edu.br/apidata/v2'
};

export function getDefaultURL(resource: string) {
    return API.default + resource;
}
