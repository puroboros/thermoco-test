# Thermo CO Admin Dashboard
This is the test app for Vintra.io

## Instructions: 

Install dependencies:
```
npm install 
``` 

serve webapp:
```
npm run start 
``` 

You will need Backend App in order to run it properly:

docker run -p 8000:8000 -it vintratest/thermo_api:latest

## TODO:
- Improve styling
- Find a usage for PATCH
- Change backend so it returns paginated response and then change the strategy to consume the list

