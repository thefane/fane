#!/bin/bash

og_file = "$1"
user_code = "$2"
lang = "$3"

# make cat in og file code the user code



# compare languages and execute the files accordingly

if [$(lang)="cpp"]; then
    timeout 2s g++ $2
fi

if [$(lang)="python"]; then
    timeout 2s py $2
fi

if [$(lang)="c"]; then
    timeout 2s g++ $2
fi

if [$(lang)="rust"]; then
    # timeout 2s g++ $2
fi

if [$(lang)="js"]; then
    timeout 2s node $2
fi

