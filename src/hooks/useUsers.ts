import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        // --- if you need to make it with async
        // const fetchUsers = async () => {
        //   try {
        //     const res = await apiClient.get<User[]>(
        //       "/users", // remove the 'X' at the end to fetch the data
        //       { signal: controller.signal } // only for cancelling fetch request
        //     );

        //     setUsers(res.data);
        //   } catch (err) {
        //     setError((err as AxiosError).message);
        //   }

        //   return () => controller.abort();
        // };

        // fetchUsers();

        // --- if not made with async you can use:

        const { request, cancel } = userService.getAll<User>();

        request
        .then((res) => setUsers(res.data))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
        });

        return () => cancel(); //cleanup function that is called when leaving page
    }, []);

    return {users, error, setUsers, setError};
}

export default useUsers;