gcc -c predefined.c -o predefined
 gcc -c usercode.c -o usercode

 gcc -o test predefined usercode

 ./test (final execution)