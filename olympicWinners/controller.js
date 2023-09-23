import axios from "axios";
export const getOlympicWinners = async (req, res) => {
  try {
    const data = await axios.get(
      "https://www.ag-grid.com/example-assets/olympic-winners.json"
    );
    res.status(200).json({
      data: data.data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
