import { NextApiRequest, NextApiResponse } from 'next';

const handleSelectDate = async (req: NextApiRequest, res: NextApiResponse) => {
  const { date } = req.body;
  // Do something with the selected date, e.g., save it to the database
  console.log(`Selected date: ${date}`);
  res.status(200).json({ message: 'Date selected successfully' });
};

export default handleSelectDate;