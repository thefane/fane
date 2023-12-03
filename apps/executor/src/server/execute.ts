import { promisify } from "util";
import { exec } from "child_process";
import * as fs from "fs";
import * as fse from "fs-extra";
import { setInterval } from "timers";

const checkInterval = 5000;
const execPromise = promisify(exec);
const SANDBOX_VOLUME_PATH =
  "/home/shivamjain/fane/apps/executor/src/sandbox/sandbox-volume";
const QUESTION_ROOT =
  "/home/shivamjain/fane/apps/executor/QUESTIONS";
const SANDBOX_ROOT = "/home/shivamjain/fane/apps/executor/src/sandbox";
const JSON_FILE = `${SANDBOX_VOLUME_PATH}/output.json`;
const DOCKERFILE_LOCATION =
  "/home/shivamjain/fane/apps/executor/src/sandbox/Dockerfile";
const SANDBOX_FILE_PATH =
  "/home/shivamjain/fane/apps/executor/src/sandbox/files";

async function main_exec(question_number: number, language: string) {
  try {
    await createDirectory(SANDBOX_VOLUME_PATH);
    await createDirectory(SANDBOX_FILE_PATH);
    await copyFiles(
      `${QUESTION_ROOT}/${question_number}/${language}`,
      SANDBOX_FILE_PATH
    );

    let container_id = await runContainer(language);

    return container_id as string;
 
    
 


  } catch (error) {
    console.error("Error:", error);
  }
}

async function createDirectory(path: string) {
  return new Promise<void>((resolve, reject) => {
    fs.mkdir(path, (err) => {
      if (err) {
        console.error("Error creating directory:", err);
        reject(err);
      } else {
        console.log("Directory created successfully:", path);
        resolve();
      }
    });
  });
}

async function copyFiles(source: string, destination: string) {
  return new Promise<void>((resolve, reject) => {
    fse.copy(source, destination, (error) => {
      if (error) {
        console.log("Error copying files:", error);
        reject(error);
      } else {
        console.log(
          "Copied files successfully from",
          source,
          "to",
          destination
        );
        resolve();
      }
    });
  });
}

async function runContainer(lang: string) {
  try {
    const { stdout: build_container } = await execPromise(
      `docker build -t sandbox-leetcode "${SANDBOX_ROOT}"`
    );
    const { stdout: run_container } = await execPromise(
      `docker run -d -v "${SANDBOX_VOLUME_PATH}":/volume --env lang='${lang}' sandbox-leetcode`
    );
    // const output_json =  await waitForFile(run_container);
    return run_container as string;
  } catch (error) {
    console.error("Error executing Docker command:", error);
  }
}

async function outputJsonRead() {
  try {
    const data = await fs.promises.readFile(JSON_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading output.json:", error);
    throw error;
  }
}

const waitForFile = (run_container: string) => {
  return new Promise((resolve, reject) => {
    const checkFile = setInterval(async () => {
      const fileExists = await checkFileExists();
      if (fileExists) {
        console.log("output.json exists. Performing action...");
        clearInterval(checkFile);
        await rmAndDelete(run_container);
        const output_json = await outputJsonRead();
        console.log(output_json);
        resolve(output_json);
      } else {
        console.log("output.json doesn't exist yet. Waiting...");
      }
    }, checkInterval);
  });
};

const checkFileExists = async () => {
  return new Promise((resolve) => {
    fs.access(
      `${SANDBOX_VOLUME_PATH}/output.json`,
      fs.constants.F_OK,
      (err) => {
        if (!err) {
          resolve(true);
        } else {
          resolve(false);
        }
      }
    );
  });
};

async function rmAndDelete(run_container: string) {
  try {
    await execPromise(`docker stop ${run_container.trim()}`);
    await execPromise(`docker rm ${run_container.trim()}`);
    console.log("Container removed.");
  } catch (error) {
    console.error("Error executing Docker command:", error);
  }
}

export default {main_exec,waitForFile};
