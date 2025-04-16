export default function PromiseTest() {
    const increase = (number) => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = number + 10;
                if (result > 50) {
                    const e = new Error("it is larger than 50");
                    return reject(3);
                }
                resolve(result);
            }, 1000)
        })
        return promise;
    }
    console.log("promise");

    increase(0)
        .then((number) => {
            console.log(number);
            return increase(number);
        })
        .then((number) => {
            console.log(number);
            return increase(number);
        })
        .then((number) => {
            console.log(number);
            return increase(number);
        })
        .then((number) => {
            console.log(number);
            return increase(number);
        })
        .catch((e) => {
            console.log(e);
        });
}

