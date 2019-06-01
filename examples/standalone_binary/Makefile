all:
	emcc hello.c -s ONLY_MY_CODE=1 -s SIDE_MODULE=1 -s WASM=1 -s EXPORTED_FUNCTIONS="['_add']" -o hello.wasm -O0
