import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import {courseParts} from './data'


const App = () => {
//   const courseName = "Half Stack application development";
//   const courseParts = [
//     {
// 		id: 1,
//       	name: "Fundamentals",
//       	exerciseCount: 10
//     },
//     {
// 		id:2,
//       	name: "Using props to pass data",
//       	exerciseCount: 7
//     },
//     {
// 		id:3,
//       	name: "Deeper type usage",
//       	exerciseCount: 14
//     }
//   ];

  return (
    <div>
		<Header courseName={"Half Stach application development"} />
		<Content  courseParts={courseParts} />
		<Total  courseParts={courseParts} />
    </div>
  );
};

export default App;