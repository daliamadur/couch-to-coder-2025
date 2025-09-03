# ✒️ Week 3
**Learning Objectives:** NPM, Web Servers, HTTP and Data Persistence

📄 [`index.js`](./server/index.js)
📄 [`recipes.json`](./server/recipes.json)

## 📝 Notes

### Recipe website use cases
`GET` *to see list of recipes*
- 👤 Type URL in website
- 🖥️ NodeJS applications listens for incoming requests
- 🖥️ All recipes retreived in an array and send to frontend
- 👤 User sees list of recipes on website

`POST` *to add a new recipe*
- 👤 Insert data into form on website
- 🖥️ NodeJS applications listens for incoming requests
- 🖥️ Write data into JSON file
- 👤 User receives confirmation if successful

### NPM
**N**ode **P**ackage **M**anager

**Package** – pre-written code that is commonly used across multiple codebases

**Open Source** – source code can be looked at and contributed to by the public 

**[NPM Registry](https://www.npmjs.com/)** – used to browse and download node packages

`npm init -y` – initialises an empty npm project, allowing for additional packages to be installed

`package.json` – stores project information
- **Name, Version, Keywords, Description, Author** – self-explanatory package metadata that is used when published
- **Main** – entry point of the program
- **Dependencies** – additional node packages that the project uses
- **Scripts** – name of the project
- **License** – specifies usage permissions for other users

### Servers
#### Web Server

- Software application that processes incoming HTTP requests and outgoing responses
- Serves content from server to client
    - Static content: files, multimedia, scripts
    - Dynamic content: data subject to change based on user input/other side effects

### HTTP

**H**yper**T**ext **T**ransfer **P**rotocol – communication protocol used to transfer HTML files over the internet

- **Client makes a request** – Browser sends HTTP request to server for the requested page attached to the URL
- **Server responds** – Server sends HTTP response with requested page which is displayed by the browser

```powershell
# Powershell syntax for manual web requests in the terminal
Invoke-WebRequest -Uri http://localhost:3000/recipes -Method POST    
```
- `Uri` – **U**niversal **R**esource **I**dentifier (the URL of site in this case)
- `Method` – HTTP method keyword

#### Methods
- `GET` – Fetch a file
- `POST` – Send data to server
- `PUT` – Upload something to server
- `DELETE` – Delete something from server

#### Status Codes
- `200` – Okay
- `401` – Unauthorised request (requires authentication)
- `403` – Forbidden request (authenticated user doesn't have correct permissions)
- `404` – Page wasn't found on server
- `500` – Internal server error (issue on backend)

#### Headers
- Extra parameters sent with requests and responses
- **Examples:** Cookies, Authentication, Tokens, Accepted data types

#### Body
- Data being sent
- **Examples:** Form data, HTML webpage, JSON response

### Data Persistence

- Ways of ensuring data is being stored/retreived correctly
#### JSON
**J**ava**S**cript **O**bject **N**otation – data file type used to easily convert to and from JavaScript objects
- Key-value pairs in curly braces
- All keys in double quotes, values can be of any valid JavaScript type
- (used for this project) – more ideal for smaller projects/limited capacity
    - ✅ Simple to use and access (to read from/write to)
    - ❌ Not easily scalable, error prone

#### Databases
- **Transaction** – Collection of database operations performed as a single unit of work
    - **A**tomicity – All transactions are completed fully
    - **C**onsistency – Transactions bring database from one valid state to another
    - **I**solation – Transations should be independent
    - **D**urability – Changes made by transactions are permanent
#### SQL 
- Postgres, SQLite
- Relational databases used to store data in defined rows and columns
    - ✅ High structure and data integrity
    - ❌ Rigid schema, high performance overhead

#### NoSQL
- MongoDB, Couchbase
- 
    - ✅ High performance and scalability
    - ❌ Prone to data inconsistency, lack of **ACID** compliance