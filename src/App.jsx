import { uid } from 'uid';
import './App.css'
import Form from "./components/Form/Form";
import List from './components/List';
import { useState, useEffect } from 'react';
import useLocalStorageState from "use-local-storage-state";


function App() {
  const [activities, setActivities] = useLocalStorageState(
    "activities", {defaultValue: []}
  );
console.log("activities", activities);
  
  const handleAddActivity = (newActivity) => {
    const activityWithId = {...newActivity, id: uid()};

    setActivities((prevActivities) => [...prevActivities, activityWithId]);
  };
  
  //Fetch API
  const [weather, setWeather] = useState(); 
  const [condition, setCondition] = useState(); 
  const [temperature, setTemperature] = useState(); 

  //Filtering the List
  const filteredActivities =activities.filter(
   activity => activity.isForGoodWeather === weather
   );
   
   useEffect(() => {
    //Fetch on Intervall
    const interval = setInterval(() => {
    async function fetchData() {
      const response = await fetch(
        'https://example-apis.vercel.app/api/weather/'
        );
        const data = await response.json();
        console.log("data", data);
        setWeather(data.isGoodWeather);
        setCondition(data.condition);
        setTemperature(data.temperature);
      }
      
      fetchData();
      
    }, 5000);
    return () => clearInterval(interval);

}, []);


function handleDeleteActivity (clickedId) {
 setActivities(activities.filter((activity) => activity.id !== clickedId));
}


  return (
    <>
      <h1>
      {condition}
      {temperature}
      </h1>
    <List 
    viewList={filteredActivities} 
    isGoodWeather={weather}
    onDeleteActivity={handleDeleteActivity}
    />
    <Form onAddActivity = {handleAddActivity} />
    </>
  )
}

export default App;

