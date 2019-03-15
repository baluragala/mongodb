db.restraunts.aggregate([
  {
    $group: {
      _id: "$cuisine",
      count: {
        $sum: 1
      }
    }
  }
]);
