/**
 * 
 * @param {Array<String>} deck Aqui va un deck que
 * @returns {String}
 */


export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }
    return deck.pop();
}