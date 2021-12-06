import { Link } from 'react-router-dom';

const Template = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/users">users</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
};

export default Template;
