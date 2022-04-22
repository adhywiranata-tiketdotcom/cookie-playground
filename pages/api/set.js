// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const newToken = "token=token__" + Math.random() * 100;
  res.setHeader(
    "Set-Cookie",
    newToken + "; HttpOnly; expires=Mon, Jun 13 2022 00:00:00 UTC;"
  );
  res.status(200).json({ newToken });
}
