type Data = {
  name: string;
};

export default function handler(req: Next.NextApiRequest, res: Next.NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' });
}
