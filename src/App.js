import {useDispatch, useSelector} from "react-redux";
import {changeName} from "./userSlice";

function App() {
    const userName = useSelector(state => state.user.name)
    const dispatch = useDispatch()
    function handleChange(newName){
        dispatch(changeName({
            name:newName
        }))
    }
      return (
        <div className="App">
          <h1>Hii, {userName}</h1>
            <button onClick={()=>handleChange("Udhaya")}>Change to Udhaya</button>
            <button onClick={()=>handleChange("Brain")}>Change to Brain</button>
        </div>
      );
}

export default App;
