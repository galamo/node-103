# Node.js

- check your version `node -v`
- open js runtime environment `node` ( and start typing js )
- running your script `node <FILENAME.js>`

# Ex - 1 9.6
- create new file called `getUserApi.js` 
- implement http request to random users
- call the `getUserApi` function inside the `index.js` `init` Function

# Homework
- Create a script in node that read content from JSON file and print the result into the console
- Create a script in node that monitor the RandomUsersApi, every 10 sec, and log in a file, write into file the following result `[DateTime] - [Api-Name] - [HTTP response Status]`
for example `[2024-06-09T17:58:59.129Z] - [random-users-api] - [200 OK]`


# Ex - 1 19.6
Create A script that delete a file from folder
- deleteFile(filePath)
1. the script will print the list of files
2. delete the requested file
3. print the list of files again.

HINT: readdir, unlink


# Homework
- by using command `npm init`
- create your own module 
- inside the module create `index.js`
- implement your own Function with your own logic


# Ex 1 30.6
1. Create new module
2. install the following package `npm i bring-them-home-now`
3. execute inside the module a the following function `bringThemHomeNow.searchByLowerAge`
4. explain whats this function actually doing? 


# Ex 2 30.6
1. create a function that fetch the data from the following API: http://129.159.129.38:8080/hostages
2. print to the console the data fetched
3. ADD TS Types to your function



# EX - 1 4.8.2024
1. Create API that listen to port 4000
2. The API will expose service ( entry point ) with the following path: /your-name
3. the API will return your name to the client