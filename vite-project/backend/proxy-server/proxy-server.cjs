const express = require('express');
const app = express();
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()
const PORT = 3000; 

app.use(cors())

app.get("/udemy-courses/:category", async (req,res) => {
    try{
        const clientId = process.env.CLIENT_ID;
        const clientSecret = process.env.CLIENT_SECRET;
        const category = req.params.category; 
        // console.log(category)
        const encodedCredentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
        const response = await axios.get(`https://www.udemy.com/api-2.0/courses/?category=${category}`,{
          headers: {
            'Authorization': `Basic ${encodedCredentials}`
          }
        })

        res.status(200).json(response.data.results)
    }
    catch (error) {
        // Handle errors
        console.error('There was a problem with the Axios request:', error);
        res.status(500).send('Internal Server Error');
      }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});