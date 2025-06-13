import authHandlers from "./services/login.handlers";
import userHandlers from "./services/user.handlers";

export const handlers = [
  ...authHandlers,
  ...userHandlers
];
