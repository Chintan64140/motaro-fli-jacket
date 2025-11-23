import moment from "moment";

const getRandom10 = (arr) => {
  return arr
    .sort(() => Math.random() - 0.5) // shuffle array
    .slice(0, 10); // take first 10
};

const toKeyValueArray = (obj) => {
  return Object.entries(obj).map(([key, value]) => ({
    key,
    value,
  }));
};

function uniqueId() {
  return crypto.randomUUID();
}

function day7after(date) {
  return moment(date).add(7, "days").format("DD-MM-YYYY");
}

export { getRandom10, toKeyValueArray, uniqueId, day7after };
