import express from "express";
import axios from "axios";

const countries = (app: express.Application) => {
  const router = express.Router();

  app.use('/api', router);

  router.get('/countries/:countries', async (req, res, next) => {
    const { countries } = req.params;

    try {
        const {data} = await axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${countries}`);
        
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
  });

  router.get('/countries', async (req,res,next) => {
    try {
        const {data} = await axios.get(`https://restcountries.eu/rest/v2/all`)
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
  })
};

export default countries;