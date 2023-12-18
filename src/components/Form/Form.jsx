
import "./Form.css";

// Call onAddActivity and pass it the data object as argument.
export default function Form ({ onAddActivity }){
function handleSubmit(event){
    event.preventDefault();

    /*Extract the submitted data as an object with the keys name and 
    isForGoodWeather and their respective values.
    Hint: To get the boolean value of a checkbox, use .checked.*/

    const newActivity = {
        name: event.target.elements.name.value,
        isForGoodWeather: event.target.elements.isForGoodWeather.checked,
    };
        
    event.target.reset();
    event.target.elements.name.focus();
    onAddActivity(newActivity);
}

    return (
        <form onSubmit={handleSubmit} className="form">
        <h1>Add new Activity</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Write your activity here" className="input_activity"></input>
        <div>
         <label htmlFor="checkbox" >Good weather activity</label>
         <input type="checkbox" name="isForGoodWeather" id="checkbox"></input>
        </div>
        <button type="submit">submit</button>
        </form>
    );
}