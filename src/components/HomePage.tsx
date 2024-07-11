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
    <div className=" h-screen flex justify-center items-center flex-col gap-7">
            <div className="flex flex-col gap-4 w-56 text-center p-2 border rounded-md">
                <Button onClick={() => dispatch(increment())}>+</Button>
                <span className="text-2xl font-bold">{count}</span>
                <Button onClick={() => dispatch(decrement())}>-</Button>
            </div>
            <div className="flex flex-col gap-2">
                <Input placeholder="Enter the number..." value={amount} onChange={(e) => setAmount(+e.target.value)} />
                <Button type="primary" onClick={() => {
                    dispatch(incrementByAmount(amount))
                    setAmount(0)
                  }}>Add</Button>
            </div>
    </div>
  )
}

export default HomePage