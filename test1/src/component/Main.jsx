
import React , {useState} from 'react'

const Main =()=> {
const [myName, setmyName] = useState("yeeun")
    function ChangeName() {

        setmyName(myName === "yeeun" ? "옝응" : "yeeun");
    }
  return (
    <div>
        <h1>안녕하세요. {myName}입니다.</h1> {/* class 면 props.name을 this.props로 사용*/}
        <button onClick={ChangeName}>Change</button>
    </div>
  );
}

export default Main;
