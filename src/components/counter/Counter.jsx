import { useState } from 'react'
import { PropTypes } from 'prop-types'
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0)

    function incrementCounterParent(by) {
        setCount(count + by)
    }

    function decrementCounterParent(by) {
        setCount(count - by)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1}
                incrementParent={incrementCounterParent}
                decrementParent={decrementCounterParent}/>
            <CounterButton by={2}
                incrementParent={incrementCounterParent}
                decrementParent={decrementCounterParent}/>
            <CounterButton by={5}
                incrementParent={incrementCounterParent}
                decrementParent={decrementCounterParent}/>
        </>
    )
}

function CounterButton({by, incrementParent, decrementParent}) {
    const [count, setCount] = useState(0)

    function incrementCounter() {
        setCount(count+by)
        incrementParent(by)
    }
    function decrementCounter() {
        setCount(count-by)
        decrementParent(by)
    }

    return (
        <div className="counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" onClick={incrementCounter}>+{by}</button>
                <button className="counterButton" onClick={decrementCounter}>-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}