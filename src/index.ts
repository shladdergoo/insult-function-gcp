import 'reflect-metadata';

import container from './inversify.config';

import { IInsultService, Types } from 'node-insult';

import { Request, Response } from 'express';

export function insultHttpTrigger(req: Request, res: Response) {
  const versionKey = 'Version';
  const version = process.env[versionKey];
  console.log(
    `insultHttpTrigger (${version}) processed a request. RequestUri=${
      req.originalUrl
    }`
  );

  console.log(`Request Headers = ${JSON.stringify(req.headers)}`);
  console.log(`Request Body = ${JSON.stringify(req.body)}`);

  const insultService = container.get<IInsultService>(Types.IInsultService);
  const insults = insultService.GetInsults();

  res
    .status(200)
    .type('application/json')
    .send(insults)
    .end();
}
