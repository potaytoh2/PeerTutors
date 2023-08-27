import { NextApiRequest, NextApiResponse } from 'next';
import { processLoginServices, ReqBody } from '../../services/auth/processLogin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body as ReqBody;
      console.log(email, password);
      const result = await processLoginServices({ email, password });
      if (result.status!=200) {
        return res.status(400).json({ error: result });
      } 
      if (result.status==200) {
        return res.status(200).json({ success: true, data: result });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed.' });
  }
}
