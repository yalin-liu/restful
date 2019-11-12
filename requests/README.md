# RESTful requests
This example demonstrates the CRUD RESTful services for resource `users`

## Getting Started

### Installing
```
npm install
```
### Running
```
npm start
```
### Testing
#### Create a `user`
```
curl -H "Content-Type: application/json" -X POST -d '{"name":"peter","age": 20}' localhost:8099/users
```
