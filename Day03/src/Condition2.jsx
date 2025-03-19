function Item({ name, isPacked }) {
    return  isPacked ? <li>{name} ✅</li> : <li>{name}</li>;
  }
  
  
  export default function PackingList2() {
    const items = [
        {isPacked: true, name: "Space suit"},
        {isPacked: true, name: "Helmet with a golden leaf"},
        {isPacked: false, name: "Photo of Tam"},
    ]

    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
            {items.map((item) => {
                return <Item isPacked={item.isPacked} name={item.name} />
            })}
        </ul>
      </section>
    );
  }