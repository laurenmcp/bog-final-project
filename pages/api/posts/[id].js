export default function handler(req, res) {
  const { pid } = req.query;
  console.log(pid);
  res.end(`post: ${pid}`);
}
