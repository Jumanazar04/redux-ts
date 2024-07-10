import { Button, Input } from "antd";
import { decrement, increment, incrementByAmount } from "../Redux Toolkit/features/counter/counterSlice";
import { AppDispatch, RootState } from "../Redux Toolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function HomePage() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
    const [amount, setAmount] = useState<number>()
  return (
    <div>
            <div>
                <Button onClick={() => dispatch(increment())}>+</Button>
                <span>{count}</span>
                <Button onClick={() => dispatch(decrement())}>-</Button>
            </div>
            <div>
                <Input value={amount} onChange={(e) => setAmount(+e.target.value)} />
                <button onClick={() => {
                    dispatch(incrementByAmount(amount))
                    setAmount(0)
                  }}>Add</button>
            </div>
    </div>
  )
}

export default HomePage