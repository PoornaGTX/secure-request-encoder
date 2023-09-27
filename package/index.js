const encodeUnsafeCharacters = (req, res, next) => {
  try {
    if (req.body && typeof req.body === "object") {
      function encodeStringValues(obj) {
        for (const key in obj) {
          if (typeof obj[key] === "string") {
            obj[key] = obj[key].replace(/</g, "&lt;").replace(/>/g, "&gt;");
          } else if (typeof obj[key] === "object") {
            encodeStringValues(obj[key]);
          }
        }
      }
      encodeStringValues(req.body);
    } else if (req.body && typeof req.body === "string") {
      req.body = req.body.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    next();
  } catch (error) {
    console.error("Error in encodeUnsafeCharacters middleware:", error);
    res.status(500).json({ error: "Internal Server Error encoder" });
  }
};

export default encodeUnsafeCharacters;
