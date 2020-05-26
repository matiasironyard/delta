import { UseContext } from "../components/synergy/synergy";

const userFinder = (userId, blogUsers) => {
  console.log("USERS", blogUsers);
  console.log("userId", userId);
  const user = blogUsers.filter((x) => x.id === userId);
  console.log("match", user);
  return user;
};

export default userFinder;
