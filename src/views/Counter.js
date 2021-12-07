import Template from 'components/templates/Template';
import Button from 'components/Button';
import { inc, dec } from 'store/counter';
import { connect } from 'react-redux';

const Home = ({ counter, inc, dec }) => {
    return (
        <Template>
            <h1>{counter}</h1>
            <Button handleClick={inc}>+</Button>
            <Button handleClick={dec}>-</Button>
        </Template>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
