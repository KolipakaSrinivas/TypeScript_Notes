1. To Install Typescript

# npm typescript -g

2. To Compaly Typescript

# tsc app.js main.js

# tsc app.js (same Name)

3. To compaly ts

# tsc app.ts -w

# tsc app.ts --w (To watch all Time)

4. To install tsconfig.json()

# tsc init

5.  To set => "rootDir": "./",

# "rootDir": "./src",

6.  To set => "outDir": "./",

# "rootDir": "./build/js",

7. To set javascript version "target": "es5",

# es2016 , es5

8. To set only src foliders
   last in the compilerOptions{}
   "include": [
   "src"
   ]

9. To if dont want campaly file error

# uncomment this commmand "noEmitOnError": true, or ts noEmitOnError --w

10. -Typescript is strongly and Statically Type Language
    -Javascript is Loosely or weakly and dynamically Type Language

    # strongly Type language Demand The specification of type Writing code

    # Loosely Type Language Do not require Types specification Writing code

    ***

    # Statically means Types are checked at compile Time

    # dynamically means Types are Checked at run Time

11. Without return key word in function, function return void, without functon keyword or with, work same

# const add = (a: number, b: number): number {

# return a + b

# }

# const Console = (): void => {

# console.log("String")

# }

13. Type Assecrtions means SomeTimes You will have information Type of value That typescipt can't know about

14. unknow Type never use but end less if requred
    # (10 unknow) as string
