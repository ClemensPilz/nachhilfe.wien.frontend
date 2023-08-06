# nachhilfe.wien.frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build

# nachhilfe.wien Frontend

## Introduction
Welcome to the culmination of the CODERS.BAY Vienna Bootcamp: the nachhilfe.wien project.  
This endeavor is split into two distinct repositories: the frontend (which you're currently viewing) and the backend.

## Project Vision
nachhilfe.wien aims to bridge the gap between educators and learners. It's a dedicated platform where instructors can showcase their expertise and offer private lessons. 
Concurrently, students can effortlessly search for suitable teachers, initiate communication, and schedule sessions.

By streamlining this process, we hope to foster a thriving educational community in Vienna, making quality education accessible and convenient for all.




## Run Locally

### Prerequisites
Ensure you have the following installed:
- Vite
- Node.js
- Tailwind.css

Clone the project

```bash
  git clone https://github.com/ClemensPilz/nachhilfe.wien.frontend.git
```

Go to the project directory

```bash
  cd nachhilfe.wien.frontend
```

Install dependencies and run the app in dev mode so the h2-database will be used (in memory database)

```bash
  mvn spring-boot:run -Dspring-boot.run.profiles=dev

```

If it is not working try:
```bash
    & 'mvn' 'spring-boot:run' '-Dspring-boot.run.profiles=dev'
    
```

## Install Frontend

Follow the instructions for installation in this repository  
https://github.com/dokoe92/nachhilfe.wien.backend



## Documentation

For the Endpoint documentation you can look up the API paths in our Swagger documentation.   
Just run the application and insert the following link in your browser:

http://localhost:8080/swagger-ui

If the links is not working please check the port where you are running the application.

```
