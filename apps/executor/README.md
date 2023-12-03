A clone of online judging systems like LEETCODE with sandboxing to prevent injection scripts

Tech stack :
[backend]
1) Docker
2) Typescript
3) Nodejs + Express 

## Dockerfile

-> Contains alpine linux for super lightweight containers

-> Has nodejs, python3, g++, gcc, openjdk11 packages

-> Entrypoint.sh file contains command to execute code and give output 

-> Necessary to create volume folder to access output.json 

*  Should contain "files" folder containing : 

    1. **Incoming** (a predefined file , not shown to user)

    2. **Usercode** (file that will be sent by monaco editor) 

Command to run :

```sh
#To build image

docker build . -t sandbox-leetcode
```

```sh
#To run the container 

docker run -d -v sandbox-volume:/volume --env lang='py' sandbox-leetcode
```



# TO ADD

1) Resource constraint
2) Timing contraint


# LESSONS

* chatgpt gave this code , which made me dive into utils library , specifically , the **promisify** function

* Normally , promises are super cumbersome , but goddamn , this is a god send , a promise wrapper 

Where have i used it ?

In calling execution process

[Stackoverflow discussion on promisify](https://stackoverflow.com/questions/30763496/how-to-promisify-nodes-child-process-exec-and-child-process-execfile-functions)

The above stack overflow thread also surprisingly makes the use on execution process. I guess everyone is facing the problem with async exec process haha

