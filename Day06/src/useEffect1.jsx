import { useState } from "react";
import { useEffect } from "react";

function Modal() {
    return (
        <div style={{height: "20%", width: "70%", backgroundColor: "lightcyan", padding: "10px"}}>
            <p>useEffect Modal</p>            
        </div>
    )
}

export default function UseEffect1() {
    useEffect(() => {
        console.log("component mounted");
        setTimeout(() => {
            setModal(false);
        }, 3000)
    }, []);

    const [inputs, setInputs] = useState({name: '', nickname: ''});
    const [depname, setDepname] = useState('');
    const [modal, setModal] = useState(true);
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        console.log(`after: ${depname}`);

        return (
            console.log(`before: ${depname}`)
        )
    }, [depname]);

    return (
        <div>
            <div>
                <input name="name" onChange={onChange} />
                <input name="nickname" onChange={onChange} />
                <button onClick={() => setDepname(inputs.name)}>이름 출력</button>
            </div>

            <div>
                <div>
                    <b>이름: </b> {inputs.name}
                </div>
                <div>
                    <b>닉네임: </b> {inputs.nickname}
                </div>
            </div>
            {
                modal ? <Modal /> : null
            }
        </div>
    );
}