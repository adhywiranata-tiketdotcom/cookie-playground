// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    "token=token__" +
      Math.random() * 100 +
      "; HttpOnly; expires=Thu, Jan 01 1970 00:00:00 UTC;"
  );
  res.status(200).json({ name: "John Doe" });
}
