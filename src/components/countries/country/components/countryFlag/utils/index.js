export function getFlagUrl(code) {
    if(code && typeof code === 'string') {
        return `https://flagcdn.com/${code.toLowerCase()}.svg`
    }  
}