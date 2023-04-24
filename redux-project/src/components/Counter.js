import { Component } from 'react';
import classes from './Counter.module.css';
import {useSelector, useDispatch, connect} from 'react-redux'

import { counterActions } from '../store/counterSlice'; 

const Counter = () => {
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


//redux in class based component

// class Counter extends Component{

//   incrementHandler() {
//     this.props.increment()
//   }
//   decrementHandler() {
//     this.props.decrement()
//   }
//   toggleCounterHandler(){
//     this.props.toggle();
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>+</button>
//           <button onClick={this.decrementHandler.bind(this)}>-</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     'increment': () => dispatch({type: 'increment'}),
//     'decrement': () => dispatch({type: 'decrement'}),
//     'toggle': () => dispatch({type: 'toggle'}),
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;