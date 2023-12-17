import { type User } from "../types/user";
import { fetchFirebaseData } from "./fetch-firebase-data";

export async function fetchGithubData() {
  const user = await fetch("https://api.github.com/users/mathkruger");

  if (user.status === 403) {
    const fallback = await fetchFirebaseData<User>("fallbackUserData");
    return fallback[0];
  }

  const userJson = await user.json();
  return userJson as User;
}
