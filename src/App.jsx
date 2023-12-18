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


  return (
    <>
    <List 
    viewList={filteredActivities} 
    isGoodWeather={isGoodWeather}
    />
    <Form onAddActivity = {handleAddActivity} />
    </>
  )
}

export default App;

