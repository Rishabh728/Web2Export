const jwt = require("jsonwebtoken");
const { HttpStatus } = require("../helper/statusCode");
const Response = require("../helper/response");
const User = require("../models/user/User");



const requireAuth = (req, res, next) => {
    const authHeader = req.headers['authorization']
    // const profileActive = req.headers['profile']
    const token = authHeader && authHeader.split(' ')[1]
    if (token) {
        jwt.verify(token, process.env.SECRETKEY, async (err, user) => {
            if (err) {
                console.log("Token error: ", err.message);
                res.status(HttpStatus.UNAUTHORIZED.code).send(
                    new Response(false, err.message));

            } else {
                req.user = user
                // console.log("user",user);
                if (req.user) {
                    reqProfile = await User.findOne(
                        {
                            where: { id: user.id }
                        });
                    req.profileActive = parseInt(reqProfile.id);
                    next();
                } 
            }
        });
    } else {
        res.status(HttpStatus.UNAUTHORIZED.code).send(
            new Response(false, `YOU ARE ${HttpStatus.UNAUTHORIZED.message} TO ACCESS THIS`));

    }
};

module.exports = { requireAuth };
