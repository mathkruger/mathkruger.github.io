import { type User } from "../types/user";
import { fetchFirebaseData } from "./fetch-firebase-data";

async function fetchFallbackData() {
  const fallback = await fetchFirebaseData<User>("fallbackUserData");
  return fallback[0];
}

export async function fetchGithubData() {
  try {
    const request = await fetch("https://api.github.com/users/mathkruger");

    if (request.status === 403) {
      throw new Error("403");
    }

    const user = await request.json();
    return user as User;
  } catch {
    return await fetchFallbackData();
  }
}
