import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

import User from "../../models/User";
import config from "../../config";

passport.use(
  new Strategy(
    {
      secretOrKey: config.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (tokenPayload, cb) {
      try {
        const user = await User.findOne({ _id: tokenPayload.id });
        if (!user) {
          cb(null, false);
        }

        cb(null, user);
      } catch (error) {
        return cb(error);
      }
    }
  )
);
