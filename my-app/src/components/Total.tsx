
import {  Course} from '../types';


const Total = ({courseParts} : Course) => { 


	const calculateTotal  =  courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)

	return ( 
	
		<p>
			Number of exercises <span> {calculateTotal}  </span>    
		</p>
	
	);
};

export default Total;