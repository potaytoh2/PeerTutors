import { NextApiRequest, NextApiResponse } from 'next';
import { processSignupServices, ReqBody } from '../../services/auth/processSignUp';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method == 'POST') {
    console.log("hello")
    try {
      const { email, password } = req.body as ReqBody;
      const result = await processSignupServices({ email, password });
      if (result.status!=200) {
        return res.status(400).json({ error: result });
      } else {
        return res.status(200).json({ success: true, data: result });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed.' });
  }
}
