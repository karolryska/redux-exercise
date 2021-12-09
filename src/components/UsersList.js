const UsersList = ({ users }) => {
    return (
        <ul>
            {users.map((user) => {
                return (
                    <li key={user.login.uuid}>
                        <p>{user.name.first}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default UsersList;
