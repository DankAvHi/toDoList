import { User as user } from "@prisma/client";

declare global {
     namespace Express {
          interface User extends User, user {}
     }
}
