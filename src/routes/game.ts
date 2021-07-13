import express from "express";
import passport from "passport";
import User, { UserDocument } from "../models/User";
import play from "../utils/game/play";

require("../utils/auth/jwt");

const games = (app: express.Application) => {
  const router = express.Router();

  app.use("/game", router);

  router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res, next) => {
      const { email, coins } = req.user as UserDocument;
      if (coins <= 0) {
        return res.status(200).json({ coins, message: "insufficient coins" });
      }
      const { result, coinsEarned } = play();
      const finalCoins = coins + (coinsEarned - 1);

      try {
        await User.updateOne({ email }, { coins: finalCoins });
        res.status(200).json({ result, finalCoins });
      } catch (error) {
        next(error);
      }
    }
  );
};

export default games;
