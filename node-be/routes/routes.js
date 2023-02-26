const express = require("express");
const router = express.Router();
const controller = require("./controllers/")

router.post("", controller)


module.exports = router;

import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';