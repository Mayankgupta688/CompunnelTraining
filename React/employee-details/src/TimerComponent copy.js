export function TimerComponent() {
    debugger;
    var currentTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    
    setInterval(function() {
        currentTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        console.log(currentTime)
    }, 1000)
    
    return (
        <div>
            <h1>Current Time is: {currentTime}</h1>
        </div>
    )
}