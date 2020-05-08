import React from 'React';
import Section from './Section';

class App2 extends React.Component{
	state={
		app:[
           {name: "Aliquam Hendrerit Mi Metus"},
           {name: "Mauris Vulputate Cras Amet"}, 
           {name: "Suspendisse Nullam Sodales"} 

		]

	}
	render(){
		const x= this.state.app;

		return(
			<div>
				<Section 
				name = {x[0].name}/>
	            <Section
	            name = {x[0].name}/>
	            <Section
	            name = {x[0].name}/>
	        </div>    
			)
	};


}

export default App2;