export default function List({isGoodWeather, viewList}) {


return (
 <>
 {viewList.length === 0 ? (
    <h3> No activities yet! </h3>
 ) : (
<h3>
{isGoodWeather
? "Good weather activities"
: "Bad weather!"}
</h3>
 )}
    <ul>
    {viewList.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
    ))
    }
  </ul>
  </>
);

}











// 리스트 제한두고 싶을때 slice
// export default function List({activities}) {
//     console.log(activities);
//     const firstFiveArray = activities.slice(0,5)
//     return (
//         <ul>
//         {firstFiveArray.map((activity, index)=> (
//             <li key={index}>{activity.name}</li>
//         ))}
//       </ul>
//     );
    
//     }