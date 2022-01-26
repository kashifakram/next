import All from '../imports/reactImports'

function Counter() {
    const [count, setCount] = All.state(0);
    All.useEffect(() => {
        let timer = setTimeout(() => {setCount(count + 1)}, 1000);
        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <div>
            <h1>{count}</h1>    
        </div>
    )
}   

export default Counter
