import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface User{
    firstName: String;
    lastName: String;
    foodInventory: Array<any>;
}


// getting a user
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  //  let post: Post = result.data;
    return res.status(200).json({
      //  message: post
    });
};