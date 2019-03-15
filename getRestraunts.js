db = db.getSiblingDB("hotels");
queryRestraunts = function() {
  return db.restraunts.find();
};
var it = queryRestraunts();
while (it.hasNext()) {
  printjson(it.next());
}
