# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

**User Story #1:** A request to /api/v1/:timestamp? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds

**User Story #2:** A request to /api/v1/:timestamp? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

**User Story #3:** A request to /api/v1/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

**User Story #4:** Your project can handle dates that can be successfully parsed by new Date(date_string)

**User Story #5:** If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }

**User Story #6:** An empty date parameter should return the current time in a JSON object with a unix key

**User Story #7:** An empty date parameter should return the current time in a JSON object with a utc key
