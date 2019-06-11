// import { fs } from 'node';
import { Application, Request, Response } from 'express';

export default function(app: Application): any {
  const swaggerObject = {};

  app.use(
    'api_docs.json',
    (req: Request, res: Response): Object => {
      return res.json(swaggerObject);
    },
  );

  return swaggerObject;
}
