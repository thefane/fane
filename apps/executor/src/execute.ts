import { exec } from "child_process";
import { error } from "console";

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

function placeUserCode(userCode:File,language:Languages){
    // place user code file in sandbox/files
    exec(`mv usercode.${language}`,(output,error)=>{
        try {
            console.log("Code done ");
            return {"result":"pass","timetaken":1,"spacetaken":2}
        } catch (error) {
            console.log(error);
            
        }
    });
}

function executeCode(userCode:File,problemNumber:Number,language:Languages) {
    placePredefinedFiles(problemNumber,language);
    placeUserCode(userCode);
    const [result, timetaken, spacetaken] = execcommand();

    return {result,timetaken,spacetaken}
}

function execcommand(){
    // use exec from child_process
    exec('docker --rm run faneexec ',(output,error)=>{
        try {
            console.log("Code done ");
            return {"result":"pass","timetaken":1,"spacetaken":2}
        } catch (error) {
            console.log(error);
            
        }
    });
    // docker run rm faneexec 
}


export default executeCode;