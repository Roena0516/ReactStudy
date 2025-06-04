//QueryPre.jsx
import { useEffect, useState } from 'react';

// delay 초 동안 처리를 일시 정지하는 sleep 함수
const sleep = (delay: number | undefined) => new Promise(resolve => setTimeout(resolve, delay));

const API_KEY = '4bade55ca2c5937fbcce8c128ef5b697';

// 날씨 정보를 얻기 위한 함수
const fetchWeather = async (local: string) => {
  // 처리 지연을 위한 더미 휴지 처리
  await sleep(2000);
	
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${local}&lang=ko&appid=${API_KEY}`
  );
    //res 에 await 반환 결과 저장 `https://api.openweathermap.org/data/2.5/weather?q=Seoul&lang=ko&appid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
  //성공이면 결과를 json결과를 리턴
  if (res.ok) {
    return res.json();
  }
  // 오류 발생 시 해당 내용을 슬로우
  throw new Error(res.statusText);
};

export default function QueryPre({ }) {
  // 날씨 정보(info), loading(로딩 중인가?), error(오류 정보) 준비 error(오류 정보) 준비
  const [data, setData]  = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [local, setLocal] = useState('Seoul');

  // 컴포넌트 실행 시 날씨 정보 획득
  useEffect(() => {
    setLoading(true);
    fetchWeather(local)
      // 성공 시 정보 업데이트
       .then((res) => {
        setData(res);
        console.log(res);
       })
      // 실패 시 error 업데이트
      .catch((err) => {
        setError(err.message);
      })
      // 성공 여부와 상관없이 isLoading 업데이트
      .finally(() => {
        setLoading(false);
      })
       
  }, []);

  // 로딩 중이라면 로딩 메시지 표시
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // 통신 오류 발생 시 오류 메시지 표시
  if (error) {
    return <p>Error: {error}</p>;
  }

  // 로딩 중이거나 오류가 아닌 경우 결과 표시
  return (
  <div>
    <input type='text' name='input' placeholder='local' onChange={(e) => setLocal(e.target.value)}></input>
    <input type='button' value={'Submit'} onClick={() => {
        setLoading(true);
        fetchWeather(local)
          // 성공 시 정보 업데이트
           .then((res) => {
            setData(res);
            console.log(res);
           })
          // 실패 시 error 업데이트
          .catch((err) => {
            setError(err.message);
          })
          // 성공 여부와 상관없이 isLoading 업데이트
          .finally(() => {
            setLoading(false);
          })
    }}></input>
    <figure>
        <img
        src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
        alt={data?.weather?.[0]?.main} />
        <figcaption>{data?.weather?.[0]?.description}</figcaption>
        <ul>
            <li>
            <strong>지역 :</strong> { data?.name }
            </li>
            <li>
            <strong>온도 :</strong> { Math.round(data?.main?.temp - 273.15) }℃
            </li>
            <li>
            <strong>습도 :</strong> { data?.main?.humidity }%
            </li>
            <li>
            <strong>풍속 :</strong> { data?.wind?.speed } m/s
            </li>
        </ul>
    </figure>
  </div>
  );
}