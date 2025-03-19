function MapTest2() {
    const items = [
      {id: 1, name: '빵'},
      {id: 2, name: '우유'},
      {id: 3, name: '달걀'}
    ];
    const ages = [32, 33, 16, 40];
  const result = ages.filter(checkAdult);
  const result2 = ages.filter((item, index) => item < 33);
   
  function checkAdult(age) {
    return age >= 18;
  }
    return (
      <div>
        <h1>식료품 리스트</h1>
        <ul>
          {items.map((item) =>
          <li key={item.id}>{item.name}</li>)}
        </ul>
        <h1>filter결과</h1>
        
        {
            result.map((item)=>
                <li>result1: {item}</li>
            )
        }
        <br />
        {
            result2.map((item)=>
                <li>result2: {item}</li>
            )
        }
           
      </div>
    );
  }

  export default MapTest2;