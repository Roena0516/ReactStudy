import { useEffect } from "react";
import { useState } from "react"

export default function PromiseTest2() {
    const [error, serError] = useState(null);

    const increase = (number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = number + 10;
                if (result > 50) {
                    const e = new Error("result is large than 50");
                    return reject(e);
                }

                resolve(result);
            }, 1000)
        })
    }

    const runTask = async () => {
        try {
            let result = 0;
            for (let i = 0; i < 4; i++) {
                result = await increase(result);
                console.log(result);
            }
        }
        catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        runTask();
    }, [])
}