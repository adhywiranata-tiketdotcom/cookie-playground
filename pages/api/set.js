// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    "token=token__" + Math.random() * 100 + "; HttpOnly;"
  );
  res.status(200).json({ name: "John Doe" });
}
