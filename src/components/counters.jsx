import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const { counters, onDelete, onReset, onIncrement, onDecrement } =
      this.props;
    return (
      <div>
        <button className="btn btn-sm btn-primary" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
        ;
      </div>
    );
  }
}

export default Counters;
