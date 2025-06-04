import axios from "axios"

export default function AxiosTest(props: any) {
    return (
        <button onClick={ () => {
            axios.get('https://mikki32sw.github.io/airanb/data.json')
            .then((res) => {
                console.log(res.data);
                props.setRooms([...props.rooms, ...res.data])
            })
            .catch(() => {
                console.log('failed');
            })
        } } style={{margin: "auto"}}>Button</button>
    )
}