/*
** Wrapper for whatever logging system we use.
*/

export default function logger( level, ...msg ) {
  console.log( level.toUpperCase() + ":", ...msg );
}
