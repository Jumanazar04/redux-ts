import { Button, Input } from "antd";
import { decrement, increment, incrementByAmount } from "../Redux Toolkit/features/counter/counterSlice";
import { RootState } from "../Redux Toolkit/store";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
            <div>
                <Button onClick={() => dispatch(increment())}>+</Button>
                <span>{count}</span>
                <Button onClick={() => dispatch(decrement())}>-</Button>
            </div>
            <div>
                <Input  />
                <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
            </div>
    </div>
  )
}

export default HomePage