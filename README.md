[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# react-job-app-form
A React.js component - Job Application Form built for use with Bootstrap v3.

[View Example](https://crobinson42.github.io/react-job-app-form/)

Usage:

`npm i react-job-app-form`

```js
import React from 'react'
import ReactDOM from 'react-dom'
import JobApplication from 'react-job-app-form'

const handleFormSubmit (formData) => {
  console.log(formData) // hash of form input values
}

ReactDOM.render(<JobApplication onSubmit={handleFormSubmit} />, document.querySelector('body'))
```
