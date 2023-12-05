import { uid } from "uid";

export function Form ({ onAddActivity }){
function handleSubmit(event){
    event.preventDefault();

    const newActivity = {
        id: uid(),
        name: event.target.elements.name.value,
        goodWeatherActivity: event.target.elements.goodWeatherActivity.chekded,
    };
        
    event.target.reset();
    event.target.elements.name.focus();
    onAddActivity(newActivity);

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    // console.log(data);
}

    return (
        <form onSubmit={handleSubmit}>
        <h1>Weather & Activities App</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name"></input>
        <label htmlFor="checkbox">Good weather activities</label>
        <input type="checkbox" id="checkbox"></input>
        <button type="submit">submit</button>
        </form>
    );
}