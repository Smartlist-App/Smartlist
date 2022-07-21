import excuteQuery from "../../lib/db";
import { ExchangeToken } from "../../lib/exchange-token";

export default async (req, res) => {
  try {
    const userId = await ExchangeToken(req.query.token);

    const result = await excuteQuery({
      query: "SELECT * FROM Rooms WHERE user = ?",
      values: [userId[0].user ?? false],
    });
    res.json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};