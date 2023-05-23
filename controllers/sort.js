export const sortDataByKey = async (req, res) => {
  try {
    const sortBy = req.params.sortBy
    const data = req.body.data;

    let newData = data.sort((a, b) => {
      var keyA = a[sortBy],
        keyB = b[sortBy];
      // Compare the 2 keys
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

    res.status(200).send(newData);
  }
  catch (error) {
    console.log("err", error);
    res.status(404).json({ message: error.message });
  }
};


