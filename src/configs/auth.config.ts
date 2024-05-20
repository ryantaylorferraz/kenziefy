export const initJwtEnvVars = () => {
  const secret = process.env.JWT_SECRETT;
  const expiresIn = process.env.EXPIRES_IN;

  if(!secret) {
    throw new Error("Missing JWT enviroment variable `JWT_SECRET_KEY`")
  }

  return { secret, expiresIn }
};
