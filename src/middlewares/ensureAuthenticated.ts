import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  //Receive the token
  const authToken = request.headers.authorization;

  //Verify if token is fulfilled
  if(!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  //Validate the token
  try{
    const { sub } = verify(token, "4f93ac9d10cb751b8c9c646bc9dbccb9") as IPayload;
    
    //Retrieve user info
    request.user_id = sub;
    
    return next();
  } catch(err) {
    return response.status(401).end();
  } 
}