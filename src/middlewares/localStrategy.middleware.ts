import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import serverError from "../errors/strategy.error";
import { prisma } from "../services/connectToDatabase.service";

const LocalStrategy = () => {
     passport.use(
          new Strategy(
               {
                    usernameField: "login",
                    passwordField: "password",
               },
               async (login, password, done) => {
                    try {
                         const user = await prisma.user.findFirst({
                              where: {
                                   login: login,
                              },
                         });

                         if (!user) {
                              const salt = await bcrypt.genSalt(12);
                              const hashedPassword = await bcrypt.hash(password, salt);
                              const user = await prisma.user.create({
                                   data: {
                                        login: login,
                                        password: hashedPassword,
                                   },
                              });
                              return done(null, user);
                         }

                         const isMatch = await bcrypt.compare(password, user.password);

                         if (isMatch) {
                              return done(null, user);
                         }
                         return done(null, false, { message: "Login or password is incorrect" });
                    } catch (e) {
                         serverError(e, done);
                    }
               }
          )
     );

     passport.serializeUser((user, done) => {
          done(null, user.id);
     });
     passport.deserializeUser((id: string, done) => {
          prisma.user
               .findUnique({
                    where: {
                         id: id,
                    },
               })
               .then((user) => {
                    done(null, user);
               })
               .catch((e) => serverError(e, done));
     });
};
export default LocalStrategy;
