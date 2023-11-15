import { exec } from "child_process";

enum Languages{
    python,
    c,
    cpp,
    java,
    rust,
    typescript,
    javascript
}


function placePredefinedFiles(problemNumber:Number,language:Languages){
    // pull pre-defined file from DB
    // const predefined = DB.query()
    // predefined.h and predefine binary

    // there will be a main file with user code as function being a module import , so we just have to save userfile

    // send user code and predefined to sandbox/files
}

function placeUserCode(userCode:File){
    // place user code file in sandbox/files
}

function executeCode(userCode:File,problemNumber:Number,language:Languages) {
    placePredefinedFiles(problemNumber,language);
    placeUserCode(userCode);
}

function execcommand(){
    // use exec from child_process
    exec('docker')
    // docker run rm faneexec 
}