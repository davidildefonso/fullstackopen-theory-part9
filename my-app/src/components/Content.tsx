
import {  Course, CoursePart} from '../types';


const Content = ({courseParts} : Course) => { 

	const showDetails = (part: CoursePart) => {
		switch (part.type) {
			case "normal":				
				return 	<>
							<h3>name: {part.name} </h3>
							<p>description: {part.description} </p>
							<p>exercises: {part.exerciseCount} </p>
							<p>type: {part.type} </p>
						</>		
			case "groupProject":			
				return 	<>
							<h3>name: {part.name} </h3>
							<p>group projects: {part.groupProjectCount} </p>
							<p>exercises: {part.exerciseCount} </p>
							<p>type: {part.type} </p>
						</>
			case "submission":			
				return 	<>
							<h3>name: {part.name} </h3>
							<p>description: {part.description} </p>
							<p>exercises: {part.exerciseCount} </p>
							<p>type: {part.type} </p>
							<p>link: {part.exerciseSubmissionLink} </p>
						</>	
			case "special":			
				return 	<>
							<h3>name: {part.name} </h3>
							<p>description: {part.description} </p>
							<p>exercises: {part.exerciseCount} </p>
							<p>type: {part.type} </p>
							<p>requirements: {part.requirements.join(" - ")} </p>
						</>			
			default:
				break;
		}
	}


	return (    
		<> 
			{courseParts.map((p) => 
				<div key = {p.id} >
					{showDetails(p)}
				</div>

			)}  
		</>
	);
};

export default Content;