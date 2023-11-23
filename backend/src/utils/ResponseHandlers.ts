import { Response } from 'express';

export const sendData = (res: Response, data: any) => {
  res.status(200).json({ data });
};

export const notFound = (res: Response) => {
  res.status(404).json({ message: "Not found" })
};
