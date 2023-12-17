import { type User } from "../types/user";
import { fetchFirebaseData } from "./fetch-firebase-data";

export async function fetchGithubData() {
  const request = await fetch("https://api.github.com/requests/mathkruger");

  if (request.status === 403) {
    const fallback = await fetchFirebaseData<User>("fallbackUserData");
    return fallback[0];
  }

  const user = await request.json();
  return user as User;
}
