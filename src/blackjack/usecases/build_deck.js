import _ from 'underscore'

export const nombre = 'El tanke';

/**
 * 
 * @param {Array<String>} tipos_cartas Ejemplo ['C','D','H','S'] 
 * @param {Array<String>} tipos_especiales Ejemplo ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tipos_cartas,tipos_especiales) => {
 if (!tipos_cartas || tipos_cartas.length ===0 )throw new Error ('Tipos de carta es obligatorio como arreglo de strings')
 if (!tipos_especiales || tipos_especiales.length ===0 )throw new Error ('Tipos de carta es obligatorio como arreglo de strings')
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos_cartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos_cartas ) {
        for( let esp of tipos_especiales ) {
            deck.push( esp + tipo);
        }
    }
    return _.shuffle( deck );;
}

//export default crearDeck; //*cuando se hace esto se dice que la exportacion por defecto va ser crearDeck o sea no hay que agregar export delante de es metodo*\
// Puedes tener cuantos export quieras y referenciarlos usando {dato,dato2,dato3,funcion1,etc} from 'directorio'