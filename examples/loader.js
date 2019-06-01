if (typeof WebAssembly !== 'object' || typeof WebAssembly.instantiate !== 'function') {
  throw Error('Your browser does not support web assembly!');
}
