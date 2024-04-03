  // turno de la computadora
 
  const turnoComputadora = ( puntosMinimos, ) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1 );
        crearCarta(carta, puntosJugadores.length - 1 );

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    determinarGanador();
}