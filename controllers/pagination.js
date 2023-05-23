export const getPaginationData = async (req, res) => {
  try {
    const page = parseInt(req.body.page);
    const action = req.body.action;
    const limit = parseInt(req.body.limit);
    const total = parseInt(req.body.total);
    const data = req.body.data;

    if (!limit || !total || !data)
      res.status(422).send("Request body isn't correct");

    const results = {};
    let startIndex = 0
    let endIndex = 0
    switch (action) {
      case 'prev': {
        startIndex = (page - 1) * limit;
        startIndex <= 0 ?
          results.disablePrev = true :
          results.disablePrev = false;
        endIndex = page * limit;
        results.page = page - 1
        break;
      }
      case 'next': {
        startIndex = (page + 1) * limit;
        endIndex = (page + 2) * limit;
        results.page = page + 1;
        endIndex >= total ?
          results.disableNext = true :
          results.disableNext = false;

        break;
      }
      default: {
        results.page = 0
        startIndex = page * limit;
        endIndex = (page + 1) * limit;
        results.disablePrev = true
        results.disableNext = data.length > limit ? false : true
      }
    }

    results.data = data.slice(startIndex, endIndex > total ? total : endIndex);
    res.status(200).send(results);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
};


