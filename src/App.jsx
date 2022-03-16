import React,{useState} from "react";
import AppStyle from "./app.module.less";
import Hello from "./components/Hello";

const App=()=>{
    console.log(AppStyle)
    const [count,setCount]=useState(0)
    return(
        <div className={AppStyle.app}>
            爱喵喵的嘿嘿呀！
        </div>
    )
}

export default App;