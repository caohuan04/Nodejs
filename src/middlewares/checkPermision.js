import jwt from "jsonwebtoken";
import User from "../model/UsersModel";

const checkPermision = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                message: "Not Authorization"
            });
        }
        const data = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(data._id);
        if (!user) {
            return res.status(404).json({
                message: "Not Found"
            });
        }

        if (user.role !== "admin") {
            return res.status(403).json({
                message: "Bạn không đủ quyền truy cập"
            });
        }2
        res.locals.id = user._id;
        next();
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export { checkPermision }