import { connect } from 'react-redux';
import Template from 'components/templates/Template';
import Button from 'components/Button';
import UsersList from 'components/UsersList';
import { fetchUsers, removeUsers } from 'store/users';

const Users = ({ users, loadUsers, removeUsers }) => {
    return (
        <Template>
            <div>
                <Button handleClick={loadUsers}>load</Button>
                <Button handleClick={removeUsers}>reset</Button>
            </div>
            {users && <UsersList users={users} />}
        </Template>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: () => dispatch(fetchUsers()),
        removeUsers: () => dispatch(removeUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
