import { exec } from "child_process";

enum Languages {
  python,
  c,
  cpp,
  java,
  rust,
  typescript,
  javascript,
}

interface ExecutionResult {
  result: any;
  timetaken: number;
  spacetaken: number;
}

function placePredefinedFiles(problemNumber: number, language: Languages): void {
  // Logic to place predefined files in sandbox/files
}

function placeUserCode(userCode: File, language: Languages): Promise<ExecutionResult> {
  return new Promise((resolve, reject) => {
    exec(`mv usercode.${Languages[language]}`, (error, output) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log("Code moved");
        resolve({ result: "pass", timetaken: 1, spacetaken: 2 });
      }
    });
  });
}

function executeCode(userCode: File, problemNumber: number, language: Languages): Promise<ExecutionResult> {
  return new Promise(async (resolve, reject) => {
    try {
      placePredefinedFiles(problemNumber, language);
      const userCodePlacementResult = await placeUserCode(userCode, language);

      // Execute docker command
      exec('docker run --rm faneexec', (error, output) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          console.log("Code executed");
          resolve({ result: "pass", timetaken: 1, spacetaken: 2 });
        }
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

export default executeCode;
