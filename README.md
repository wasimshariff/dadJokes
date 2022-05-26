# Dad Jokes App

## Front End: 

For ease of development, Front End will be running as a separate app on Lite Server.

To Start the FrontEnd App, run "npm start". This command will pick a proxy file which wil redirect /api to http://localhost:8080 ( Spring boot microservice backend) 

In Case the backend has differnet port, change the url in proxy-conf.json file

## Back End:

This is a basic Spring Boot app which has H2 Embedded DB. We have dadjokes.json placed in resources folder, which will be read and stored in H2 DB on start up of the App.

Below are the api operations exposed thru this microservice:

* /api/jokes  - GET  ( List All Jokes )
* /api/jokes/{id} - GET ( Get Joke by Id )
* /api/jokes/{id} - PUT  ( Update Joke)
* /api/jokes/top/{n} - GET  ( Get Top N jokes with Most Likes )
* /api/jokes/bottom/{n} - GET ( Get Top N jokes with Most DisLikes )
* /api/jokes/active/{n}  - GET  ( Get Top N jokes with Most Likes + Most DisLikes )