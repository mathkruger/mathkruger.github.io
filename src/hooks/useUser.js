import { useEffect, useState } from "react";
import useData from "./useData";

function useUser() {
    const [user, setUser] = useState(undefined);
    const { data: fallbackUserData } = useData("fallbackUserData");

    const fetchUser = async () => {
        try {
            const user = await fetch("https://api.github.com/users/mathkruger");
            const userJson = await user.json();

            setUser(userJson);
        } catch (err) {
            setUser(fallbackUserData[0]);
        }
    }

    useEffect(() => {
        fetchUser();
    });

    return {
        user
    };
}

export default useUser;