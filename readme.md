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