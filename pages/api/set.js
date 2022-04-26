// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const newToken = "token=token__" + Math.random() * 100;
  const newToken2 = "token=token__" + Math.random() * 100;
  res.setHeader(
    "Set-Cookie",
    newToken +
      "; HttpOnly; Expires=Mon, Jun 13 2022 00:00:00 UTC; Path=/; Domain=.cookie-playground.vercel.app;"
  );
  res.setHeader(
    "Set-Cookie",
    newToken2 +
      "; HttpOnly; Expires=Mon, Jun 13 2022 00:00:00 UTC; Path=/; Domain=.cookie-playground.vercel.app;"
  );
  res.status(200).json({ newToken, newToken2 });
}
