import Router from "../Router";

export default function Card(props: any) {

    return (
        <>
            <div className="box" key={props.key}>
                <img src={props.image} className="boximage"></img>
                <p className="title">{props.name}</p>
            </div>
        </>
    )
}