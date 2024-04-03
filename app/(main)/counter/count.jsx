const Count=({count,setCount})=>{
    return(
        <div>
            <p>you{count}cilck </p>
            <button onClick={()=>setCount(count+1)} >click</button>
        </div>
    )
};
export default Count