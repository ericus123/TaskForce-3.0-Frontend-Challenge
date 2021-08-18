[![Netlify Status](https://api.netlify.com/api/v1/badges/564a2b40-366b-42be-a76a-fe4cb85f3916/deploy-status)](https://app.netlify.com/sites/covicalc/deploys) [![Build Status](https://app.travis-ci.com/ericus123/TaskForce-3.0-Frontend-Challenge.svg?branch=main)](https://app.travis-ci.com/ericus123/TaskForce-3.0-Frontend-Challenge) [![Coverage Status](https://coveralls.io/repos/github/ericus123/TaskForce-3.0-Frontend-Challenge/badge.svg?branch=main&kill_cache=1)](https://coveralls.io/github/ericus123/TaskForce-3.0-Frontend-Challenge?branch=main&kill_cache=1)


# COVICALC

A realtime Covid-19 data web application

## Features

- Get real time Covid-19 data by country
- Get real time Covid-19 data by continents
- Get real time Covid-19 data by date
- It includes vaccinations data

  
## Tech Stack
 `React`
 `Redux`
`Sass`
`CSS3`
`Axios`
`Netlify`
`Jest`
`Yarn` 


  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_BASE_URL`

It's the base url of the data API you are using 
ex: `https://disease.sh`

  
## API Reference

Here is the [link](https://disease.sh/docs/) for full API documentation 
#### Get country data

```http
  GET /countries/country
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `country` | `string` | **Required**. It's the name of the country.|

#### Get continents' data

```http
  GET /continents}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `yesterday`      | `boolean` | **Optional**. Queries data reported a day ago |
| `twoDaysAgo`      | `boolean` | **Optional**. Queries data reported two days ago |
| `sort`      | `boolean` | **Optional**. Sorts the retur data by newest first 
| `allowNull`| `boolean`| **Optional** By default, if a value is missing, it is returned as 0. This allows nulls to be returned|


## Run Locally

Clone the project

```bash
  git clone https://github.com/ericus123/TaskForce-3.0-Frontend-Challenge
```

Go to the project directory

```bash
  cd TaskForce-3.0-Frontend-Challenge
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn run start
```

  
## Running Tests

To run tests, run the following command

```bash
 yarn run test
```

  
## Deployment

This app is deployed on netlify

  
## Demo
[https://covicalc.netlify.app/](https://covicalc.netlify.app/)


  
## Screenshots

![App Screenshot](https://i2.paste.pics/567f42bffd9a9d3a84e26139f083e3f1.png)

  
## 🚀 About Me
A full stack web developer focused on crafting great web experiences.

  
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.amanieric.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amani-eric/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/amaniericus)

  
## Feedback

If you have any feedback, please reach out to me at amaniericus@gmail.com

  