// import { AxiosError } from "axios";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import userService, { User } from "../../services/user-service";
import useUsers from "../../hooks/useUsers";

const FetchingData = () => {
  const { users, error, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    // optimistic update = update first the ui - then call the server
    // pesimistic update = call the server then update the ui

    const originalUsers = [...users];

    // optimistic update:
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Dragos" };
    const originalUsers = [...users];

    setUsers([...users, newUser]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const update = (user: User) => {
    const updatedUser = { ...user, name: user.name + " !!!" };
    const originalUsers = [...users];

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      <h3>Fetching Data</h3>

      {error && <p className="text-danger">{error}</p>}

      <button className="btn btn-outline-success mb-3" onClick={addUser}>
        <TiPlus />
      </button>

      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}

            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => update(user)}
              >
                <MdOutlineEdit />
              </button>

              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                <MdDeleteOutline />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchingData;
