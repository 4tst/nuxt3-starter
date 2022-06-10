import { useBody } from 'h3';
import add from '~/mylib/src/urils';
export default async (req, res) => {
  let body = await useBody(req);
  console.log(add(1, 3));
  return body;
  // return descTable(body.table);
};
