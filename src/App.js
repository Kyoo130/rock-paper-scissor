import './App.css';
import {useState} from "react";
import Box from "./components/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png",
  },
  paper: {
    name: "Paper",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png",
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        {/*<Box title="Computer"/>*/}
      </div>
      <div className="main">
        <button onClick={() => {
          play("scissors")
        }}>가위
        </button>
        <button onClick={() => {
          play("rock")
        }}>바위
        </button>
        <button onClick={() => {
          play("paper")
        }}>보
        </button>
      </div>
    </div>
  );
}

export default App;
