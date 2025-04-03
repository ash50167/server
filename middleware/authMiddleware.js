const protect = (req, res, next) => {
    let token = req.headers.authorization;
    console.log(token);
    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized - No token provided" });
    }
    next();
};

module.exports = { protect };
