// appfKAv2yPkfXKjhG

import Airtable from "airtable";

Airtable.configure({
  apiKey: process.env.AIRTABLE_ACCESS_TOKEN,
});
const base = Airtable.base("appfKAv2yPkfXKjhG");
export default base;
