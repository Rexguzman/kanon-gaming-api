import express from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

const auth = (app: express.Application) => {
  const router = express.Router();

  app.use("/auth", router);

  router.post("/sign-up", async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
      const findEmail = await User.findOne({ email });
      const findUsername = await User.findOne({ username });

      if (findEmail) {
        throw new Error("email already exist");
      }
      if (findUsername) {
        throw new Error("username already exist");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        coins: 20,
      });

      res.status(200).json({
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        coins: newUser.coins
      });
    } catch (error) {
      next(error);
    }
  });

  router.post("/sign-in", async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("email does not exist");
      }

      const comparePassword = await bcrypt.compare(password, user.password)

      if (!comparePassword) {
        throw new Error('Incorrect password');
      }

      if(comparePassword){
        res.status(200).json(user)
      }

    } catch (error) {
      next(error);
    }
  });
};

export default auth;
