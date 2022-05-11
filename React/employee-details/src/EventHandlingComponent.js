export function EventHandlingComponent() {

    function highlightText(event) {
        event.target.style.color = "red";
    }

    function nonHighlightText(event) {
        event.target.style.color = "black";
    }

    function alertUser(event) {
        alert("Hello World")
    }
    
    return (
        <div>
            <h1>This is React Event Handling</h1> 
            <input type="button" onMouseOver={highlightText} onMouseOut={nonHighlightText} value="Click to Raise Event" onClick={alertUser} />
        </div>
    )
}