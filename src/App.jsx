import { useState } from "react";
import React from "react";

const initialList = [
  { id: 0, title: 'Gher baitho', seen: false },
  { id: 1, title: 'Job dhundo', seen: false },
  { id: 2, title: 'product develop kero', seen: false },
];

const App = () => {

  const [myList , setMylist] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function HandleMylist(itemid , checked){
    const newlist = myList.map(item => {
      if (item.id === itemid ){
        return {...item , seen:checked};
      }

      return item ; 
    });

    setMylist(newlist)
  };

  function MandleYourList( itemid , checked){
    //we wil also de something here
    const newList = yourList.map(item => {
      if (item.id === itemid ){
        return {...item , seen:checked};
      }

      return item;
    })

    setYourList(newList);
  };


  return (
    <div>
      <h1>This is our Trip Plan</h1>  
      <h2> Akhilesh Trip plan </h2>
      <YourList List={myList} onToggle={HandleMylist} />
      <h2>Friend List</h2>
      <YourList List={yourList} onToggle={MandleYourList} />
    </div>
  )
}

const YourList = ({List , onToggle }) => {
  return (
    <ul>
      {List.map(item => (
        <li
        key={item.id}
        >
          <label>
            <input type="checkbox"
             checked={item.seen} 
             onChange={
              e => {onToggle(item.id , e.target.checked);
              }} />
          </label>
          {item.title}
        </li>
      ))}
    </ul>
  )
};

export default App
