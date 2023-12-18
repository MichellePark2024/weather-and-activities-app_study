import { uid } from 'uid';
import './App.css'
import Form from "./components/Form/Form";
import List from './components/List';
import { useState, useEffect } from 'react';
import useLocalStorageState from "use-local-storage-state";


function App() {
  // const [isGoodWeather, setIsGoodWEather] = useState('');
  const [activities, setActivities] = useLocalStorageState(
    "activities", {defaultValue: [],}
  );

  

  const handleAddActivity = (newActivity) => {
    const activityWithId = {...newActivity, id: uid()};

    setActivities((prevActivities) => [...prevActivities, activityWithId]);
  };

  //Filtering the List
  const isGoodWeather = true;
  const filteredActivities = activities.filter(
   activity => activity.isForGoodWeather === isGoodWeather
  );


  //Fetch API
  const [weather, setWeather] = useState(true); 

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(
            'https://example-apis.vercel.app/api/weather/'
        );
        const data = await response.json();
console.log("data", data);
        setWeather(data.isGoodWeather);
    }

    fetchData();
}, []);


  return (
    <>
    <List 
    viewList={filteredActivities} 
    isGoodWeather={weather}
    />
    <Form onAddActivity = {handleAddActivity} />
    </>
  )
}

export default App;

