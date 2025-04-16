import { useState } from "react";

export default function CallBackTest() {
    function f(x, callback) {
        let result = x + x;
        console.log(result);
        callback(result);
    }
    const [x, setX] = useState(0);
    setTimeout(setX(10), 10000);

    f(2, (result) => {
        f(result, (result) => {
            f(result, (result) => {
                console.log("Exit");
            });
        });
    });

    return (
        <div>
            CallBack Test {x}
        </div>
    )
}