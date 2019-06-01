const memory = new WebAssembly.Memory({ initial: 256, maximum: 256 });

const importObj = {
  env: {
    abortStackOverflow: () => { throw new Error('overflow'); },
    table: new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' }),
    __table_base: 0,
    memory: memory,
    __memory_base: 1024,
    STACKTOP: 0,
    STACK_MAX: memory.buffer.byteLength
  }
};

fetch('hello.wasm').then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObj))
  .then((wa) => {
    alert(wa.instance.exports._add(40, 2));
    // alert(wa.instance.exports._stack_overflow());
  });
