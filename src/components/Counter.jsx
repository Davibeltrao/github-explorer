export function Counter() {
    function increment() {
        console.log('Incrementing');
      }
    
    return (
        <div>
            <h2> 0 </h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}