import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import {Button, Jumbotron} from "reactstrap";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



/////////   NAVBAR   ///////////////////////////////////////////////////////////////////


class Navbar extends React.Component {

    render() {
        return (
            <div className="nav_menu-header">
                <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar fixed-top">
                <a className="navbar-brand active">Morgan Muller</a>
                <div className="navbar-nav-scroll">
                    <ul className="navbar-nav bd-navbar-nav flex-row">
                    <li className="nav-item active">
                        <a className="nav-link"  href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://mrm026.github.io/fullstack">Project1</a>
                    </li>
                    </ul>
                </div>
                </header>
            </div>
        );
    }
}


////////// JUMBOTRON /////////////////////////////////////////////////////////////

class Jumbo extends React.Component {

  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Bucknell Course Catalog</h1>
          <p class="lead">Find the courses perfect for you!</p>
        </div>
      </div>
    );
  }
}



//////////   DEPARTMENT SELECT    ///////////////////////////////////////////////////////////////////////////////////////
class DepartmentSelect extends Component{
constructor(props){
    super(props)
    this.state = {selectedDepartment:null}
    this.handleSelection = this.handleSelection.bind(this)


  }
 handleSelection(event){

    this.setState({selectedDepartment:event.target.value})
    this.props.onDepartmentChange(event.target.value)
  }
  // RENDER DEPARTMENT SELECT
	render(){
	return (<div className= "dropdown col-sm-12 col-md-6 col-lg-4 orng mb-10">

    <div><h4 class="h4"> Department:</h4></div>
    <select onChange={this.handleSelection}> <option value="unselected">Select a Department</option>
			<option value="CSCI"> CSCI </option>
			<option value="MUSC"> MUSC </option>
			<option value="EDUC"> EDUC </option>
			<option value="CHEM"> CHEM </option>
			<option value="MATH"> MATH </option>
			<option value="BIOL"> BIOL </option>
			<option value="SPAN"> SPAN </option>
			<option value="SIGN"> SIGN </option>
			<option value="GRMN"> GRMN </option>
			<option value="FREN"> FREN </option>
			<option value="GREK"> GREK </option>
			<option value="ITAL"> ITAL </option>
			<option value="PHYS"> PHYS </option>
			<option value="MILS"> MILS </option>
			<option value="PHIL"> PHIL </option>
			<option value="JAPN"> JAPN </option>
			<option value="PSYC"> PSYC </option>
			<option value="MGMT"> MGMT </option>
			<option value="ENGR"> ENGR </option>
			<option value="DANC"> CSCI </option>
		    </select>
		 </div>)

}


}

///////// YEAR SELECT /////////////////////////////////////////////////////////////////////////////////

class YearSelect extends Component{
constructor(props){
    super(props)
    this.state= {selectedYear:null}
    this.handleSelection = this.handleSelection.bind(this)

  }
handleSelection(event){
    this.setState({selectedYear:event.target.value})
    this.props.onYearChange(event.target.value)
  }

  ///// RENDER YEAR SELECT
	render(){
	return (
      <div className= "dropdown col-sm-12 col-md-6 col-lg-4 orng">
        <h4 class="h4">Year:</h4>
        <select onChange= {this.handleSelection}> <option value="unselected">Select a Year</option>
  			<option value="2018"> 2018 </option>
  			<option value="2019"> 2019</option>

		    </select>
		 </div>)
}
}

////////////// SEMESTER SELECT //////////////////////////////////////////////////

class SemesterSelect extends Component{
constructor(props){
    super(props)
    this.state= {selectedSemester:null}
    this.handleSelection = this.handleSelection.bind(this)

  }
handleSelection(event){

    this.setState({selectedSemester:event.target.value})
    this.props.onSemesterChange(event.target.value)
  }
  // RENDER SEMESTER SELECT
	render(){
	return (
    <div className= "dropdown col-sm-12 col-md-6 col-lg-4 orng">
      <div><h4 class="h4">Semester:</h4></div>
      <select onChange= {this.handleSelection}>
        <option value="unselected">Select a Semester</option>
  			<option value="Fall"> Fall </option>
  			<option value="Spring"> Spring</option>
		  </select>
		 </div>)

}

}

//////////////// CCC SELECT /////////////////////////////////////////////////////////////////////

class CCCSelect extends Component{
constructor(props){
	super(props)
	this.state= {selectedCCC:null}
	this.handleSelection= this.handleSelection.bind(this)
}

handleSelection(event){
	this.setState({selectedCCC:event.target.value})
    this.props.onCCCChange(event.target.value)
}

  // RENDER CCCSELECT
  render(){
return (<div className= "dropdown col-sm-12 col-md-6 col-lg-6 orng">
    <h4 class="h4">CCC Requirement:</h4>
    <select onChange= {this.handleSelection} className="cselect"> <option value="unselected">Select a CCC Requirement</option>
			<option value="W1"> W1 </option>
			<option value="W2"> W2</option>
			<option value="ARHC"> ARHC</option>
			<option value="AHLG"> AHLG</option>
			<option value="FRST"> FRST</option>
			<option value="EGHU"> EGHU</option>
			<option value="FOUN"> FOUN</option>
			<option value="CCFL"> CCFL</option>
			<option value="GLSP"> GLSP</option>
			<option value="RESC"> RESC</option>
			<option value="DUSC"> DUSC</option>
			<option value="EVCN"> EVCN</option>
			<option value="GBCC"> GBCC</option>
			<option value="EGSS"> EGSS</option>
			<option value="SLSC"> SLSC</option>
			<option value="SSLG"> SSLG</option>
			<option value="CCIP"> CCIP</option>
			<option value="LBSC"> LBSC</option>
			<option value="NSMC"> NSMC</option>
			<option value="NMLG"> NMLG</option>
			<option value="CCQR"> CCQR</option>
		    </select>
		 </div>)

}

}


///////////////////// TIME SELECT //////////////////////////////////////////////////////

class TimeSelect extends Component{
constructor(props){
	super(props)
	this.state={selectedTime:null}
	this.handleTimeEntry= this.handleTimeEntry.bind(this)
	}
handleTimeEntry(event){
	event.preventDefault()

	this.setState({selectedTime:this.refs.in.value})
    this.props.onTimeSubmit(this.refs.in.value)
}


// RENDER TIME SELECT
render(){

	return(<form className="form
  col-sm-12 col-md-12 col-lg-6 mb-10" onSubmit={this.handleTimeEntry}>
  <div>
    <h4>Class Time:</h4>
  </div>
  <input type="form" name="t" ref="in"></input>
  </form>)

}

}


/////////////////// COURSE DISPLAY //////////////////////////////////////////////////////////////////

class CourseDisplay extends Component{
constructor(props){
    super(props)
    this.state={year:null, semester:null, department:null, ccc:null, time:null,room:null, list:[]}


    this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
    this.handleYearChange= this.handleYearChange.bind(this)
    this.handleSemesterChange= this.handleSemesterChange.bind(this)
	  this.handleCCCChange= this.handleCCCChange.bind(this)
    this.handleTimeSubmit= this.handleTimeSubmit.bind(this)
    this.handleRoomSubmit= this.handleRoomSubmit.bind(this)

  }
	handleDepartmentChange(event){
	var x= 'https://www.eg.bucknell.edu/~amm042/service/q?'
	var count=0;
	this.setState({department:event},() => {
        if(this.state.semester!==null && this.state.semester!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Semester="+this.state.semester
			}else{
				x= x+"&Semester="+this.state.semester
			}
		}else{count=count+1;}
		if(this.state.year!==null && this.state.year!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Year="+this.state.year
			}else{
				x= x+"&Year="+this.state.year
			}
		}else{count=count+1;}
		if(this.state.department!==null && this.state.department!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Department="+this.state.department
			}else{
				x= x+"&Department="+this.state.department
			}
		}else{count=count+1;}
		if(this.state.ccc!==null && this.state.ccc!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"CCCReq="+this.state.ccc
			}else{
				x= x+"&CCCReq="+this.state.ccc
			}
		}else{count=count+1;}
		if(this.state.room!==null && this.state.room!==""){
			if(x.slice(-1)==="?"){
				x= x+"text=%22"+encodeURIComponent(this.state.room)+"%22"
			}else{
				x= x+"&text=%22"+encodeURIComponent(this.state.room)+"%22"
			}
		}else{count=count+1;}
		x=x+'&limit=100'


	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
		if(this.state.time!==null && this.state.time!==""){
			var temp=[]
		var i
		for(i=0; i<result.message.length-1; i++){

			if(result.message[i]['Meeting Time'].includes(this.state.time)){ temp.push(result.message[i]); }
			}
	    if(temp.length>0){
            this.setState({list:temp})}else{this.setState({list:result.message})}
		}else{	count=count+1;
			if(count===6){
			this.setState({list:[{Course:" "}]})
			}else{
			this.setState({list:result.message})
			}
		}

	   }
          else {
		if(this.state.year===null && this.state.semester===null && this.state.department===null && this.state.ccc===null){
		 this.setState({list:[{Course:" "}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })
		.catch(err=>console.log("Couldn't fetch ", err))
        }
    );

}
	handleYearChange(event){
	var x= 'https://www.eg.bucknell.edu/~amm042/service/q?'
	var count=0;
this.setState({year:event},() => {
        if(this.state.semester!==null && this.state.semester!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Semester="+this.state.semester
			}else{
				x= x+"&Semester="+this.state.semester
			}
		}else{count=count+1;}
		if(this.state.year!==null && this.state.year!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Year="+this.state.year
			}else{
				x= x+"&Year="+this.state.year
			}
		}else{count=count+1;}
		if(this.state.department!==null && this.state.department!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Department="+this.state.department
			}else{
				x= x+"&Department="+this.state.department
			}
		}else{count=count+1;}
		if(this.state.ccc!==null && this.state.ccc!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"CCCReq="+this.state.ccc
			}else{
				x= x+"&CCCReq="+this.state.ccc
			}
		}else{count=count+1;}
		if(this.state.room!==null && this.state.room!==""){
			if(x.slice(-1)==="?"){
				x= x+"text=%22"+encodeURIComponent(this.state.room)+"%22"
			}else{
				x= x+"&text=%22"+encodeURIComponent(this.state.room)+"%22"
			}
		}else{count=count+1;}
		x=x+'&limit=100'


	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
		if(this.state.time!==null && this.state.time!==""){
			var temp=[]
		var i
		for(i=0; i<result.message.length-1; i++){

			if(result.message[i]['Meeting Time'].includes(this.state.time)){ temp.push(result.message[i]); }
			}
	    if(temp.length>0){
            this.setState({list:temp})}else{this.setState({list:result.message})}
		}else{	count=count+1;
			if(count===6){
			this.setState({list:[{Course:" "}]})
			}else{
			this.setState({list:result.message})
			}
		}

	   }
          else {
		if(this.state.year===null && this.state.semester===null && this.state.department===null && this.state.ccc===null){
		 this.setState({list:[{Course:" "}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })
		.catch(err=>console.log("Couldn't fetch", err))
        }
    );

}




	handleSemesterChange(event){
	var x= 'https://www.eg.bucknell.edu/~amm042/service/q?'
	var count=0;
	this.setState({semester:event},() => {
       if(this.state.semester!==null && this.state.semester!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Semester="+this.state.semester
			}else{
				x= x+"&Semester="+this.state.semester
			}
		}else{count=count+1;}
		if(this.state.year!==null && this.state.year!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Year="+this.state.year
			}else{
				x= x+"&Year="+this.state.year
			}
		}else{count=count+1;}
		if(this.state.department!==null && this.state.department!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Department="+this.state.department
			}else{
				x= x+"&Department="+this.state.department
			}
		}else{count=count+1;}
		if(this.state.ccc!==null && this.state.ccc!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"CCCReq="+this.state.ccc
			}else{
				x= x+"&CCCReq="+this.state.ccc
			}
		}else{count=count+1;}
		if(this.state.room!==null && this.state.room!==""){
			if(x.slice(-1)==="?"){
				x= x+"text=%22"+encodeURIComponent(this.state.room)+"%22"
			}else{
				x= x+"&text=%22"+encodeURIComponent(this.state.room)+"%22"
			}
		}else{count=count+1;}
		x=x+'&limit=100'




	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
		if(this.state.time!==null && this.state.time!==""){
			var temp=[]
		var i
		for(i=0; i<result.message.length-1; i++){

			if(result.message[i]['Meeting Time'].includes(this.state.time)){ temp.push(result.message[i]); }
			}
	    if(temp.length>0){
            this.setState({list:temp})}else{this.setState({list:result.message})}
		}else{count=count+1;
			if(count===6){
			this.setState({list:[{Course:" "}]})
			}else{
			this.setState({list:result.message})
			}
		}

	  }
          else {
		if(this.state.year===null && this.state.semester===null && this.state.department===null && this.state.ccc===null){
		 this.setState({list:[{Course:" "}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })
		.catch(err=>console.log("Couldn't fetch", err))
        }
    );


}
handleCCCChange(event){
	var x= 'https://www.eg.bucknell.edu/~amm042/service/q?'
	var count=0;
	this.setState({ccc:event},() => {

		if(this.state.semester!==null && this.state.semester!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Semester="+this.state.semester
			}else{
				x= x+"&Semester="+this.state.semester
			}
		}else{count=count+1;}
		if(this.state.year!==null && this.state.year!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Year="+this.state.year
			}else{
				x= x+"&Year="+this.state.year
			}
		}else{count=count+1;}
		if(this.state.department!==null && this.state.department!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Department="+this.state.department
			}else{
				x= x+"&Department="+this.state.department
			}
		}else{count=count+1;}
		if(this.state.ccc!==null && this.state.ccc!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"CCCReq="+this.state.ccc
			}else{
				x= x+"&CCCReq="+this.state.ccc
			}
		}else{count=count+1;}
		if(this.state.room!==null && this.state.room!==""){
			if(x.slice(-1)==="?"){
				x= x+"text=%22"+encodeURIComponent(this.state.room)+"%22"
			}else{
				x= x+"&text=%22"+encodeURIComponent(this.state.room)+"%22"
			}
		}else{count=count+1;}

		x=x+'&limit=100'


		fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
		if(this.state.time!==null && this.state.time!==""){
			var temp=[]
		var i
		for(i=0; i<result.message.length-1; i++){

			if(result.message[i]['Meeting Time'].includes(this.state.time)){ temp.push(result.message[i]); }
			}
	    if(temp.length>0){
            this.setState({list:temp})}else{this.setState({list:result.message})}
		}else{	count=count+1;
			if(count===6){
			this.setState({list:[{Course:" "}]})
			}else{
			this.setState({list:result.message})
			}
		}

	  }
          else {
		if(this.state.year===null && this.state.semester===null && this.state.department===null && this.state.ccc===null){
		 this.setState({list:[{Course:" "}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })
		.catch(err=>console.log("Couldn't fetch", err))

});
}

handleTimeSubmit(event){

	var x= 'https://www.eg.bucknell.edu/~amm042/service/q?'
	var count=0;
	this.setState({time:event},() =>{
	if(this.state.semester!==null && this.state.semester!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Semester="+this.state.semester
			}else{
				x= x+"&Semester="+this.state.semester
			}
		}else{count=count+1;}
		if(this.state.year!==null && this.state.year!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Year="+this.state.year
			}else{
				x= x+"&Year="+this.state.year
			}
		}else{count=count+1;}
		if(this.state.department!==null && this.state.department!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Department="+this.state.department
			}else{
				x= x+"&Department="+this.state.department
			}
		}else{count=count+1;}
		if(this.state.ccc!==null && this.state.ccc!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"CCCReq="+this.state.ccc
			}else{
				x= x+"&CCCReq="+this.state.ccc
			}
		}else{count=count+1;}
		if(this.state.room!==null && this.state.room!==""){
			if(x.slice(-1)==="?"){
				x= x+"text=%22"+encodeURIComponent(this.state.room)+"%22"
			}else{
				x= x+"&text=%22"+encodeURIComponent(this.state.room)+"%22"
			}
		}else{count=count+1;}
		x=x+'&limit=100'
	if(count===5 && this.state.time===""){
		this.setState({list:[{Course:" "}]})
	}else{
	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
		var temp=[]
		var i

		for(i=0; i<result.message.length-1; i++){

			if(result.message[i]['Meeting Time'].includes(this.state.time)){ temp.push(result.message[i]); }
			}
	    if(temp.length>0 ){
            this.setState({list:temp})}else{if(this.state.time===""){this.setState({list:result.message})}else{this.setState({list:[{Course:"No available courses."}]})}}}
          else {
             this.setState({list:[{Course:" "}]})
          }
        })
		.catch(err=>console.log("Couldn't fetch", err))}
});
}
handleRoomSubmit(event){
	var x= 'https://www.eg.bucknell.edu/~amm042/service/q?';
	var count=0;
	this.setState({room:event},()=>{
if(this.state.semester!==null && this.state.semester!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Semester="+this.state.semester
			}else{
				x= x+"&Semester="+this.state.semester
			}
		}else{count=count+1;}
		if(this.state.year!==null && this.state.year!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Year="+this.state.year
			}else{
				x= x+"&Year="+this.state.year
			}
		}else{count=count+1;}
		if(this.state.department!==null && this.state.department!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"Department="+this.state.department
			}else{
				x= x+"&Department="+this.state.department
			}
		}else{count=count+1;}
		if(this.state.ccc!==null && this.state.ccc!=="unselected"){
			if(x.slice(-1)==="?"){
				x= x+"CCCReq="+this.state.ccc
			}else{
				x= x+"&CCCReq="+this.state.ccc
			}
		}else{count=count+1;}
		if(this.state.room!==null && this.state.room!==""){
			if(x.slice(-1)==="?"){
				x= x+"text=%22"+encodeURIComponent(this.state.room)+"%22"
			}else{
				x= x+"&text=%22"+encodeURIComponent(this.state.room)+"%22"
			}
		}else{count=count+1;}
		x=x+'&limit=100'

		fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
		if(this.state.time!==null && this.state.time!==""){
			var temp=[]
		var i
		for(i=0; i<result.message.length-1; i++){

			if(result.message[i]['Meeting Time'].includes(this.state.time)){ temp.push(result.message[i]); }
			}
	    if(temp.length>0){
            this.setState({list:temp})}else{this.setState({list:[{Course:"No available courses."}]})}
		}else{	count=count+1;
			if(count===6){
			this.setState({list:[{Course:" "}]})
			}else{
			this.setState({list:result.message})
			}
		}

	 }
          else {
		if(this.state.year===null && this.state.semester===null && this.state.department===null && this.state.ccc===null){
		 this.setState({list:[{Course:" "}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })
		.catch(err=>console.log("Couldn't fetch", err))});

}

componentDidMount(){

	var x= 'https://www.eg.bucknell.edu/~amm042/service/q?Semester=' + this.state.semester +'&Year=' +this.state.year+ '&Department=' + this.state.department+ '&limit=100'



	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0)
            this.setState({list:result.message})
          else {
             this.setState({list:[{Course:" "}]})
          }
        })
		.catch(err=>console.log("Couldn't fetch", err))


}


  ///// RENDER SEARCH RESULTS

	render(){
	var options

	if(this.state.list.length>1){

	  options = this.state.list.map(b=>{return(


    <div key={b.Course} class="card fill col-lg-4 col-sm-12 col-md-6">
        <div class="card-body">
            <h5 class="card-title">{b.Course}</h5>
            <h6 class="card-subtitle">{""+b.Title+""}</h6>
            <a class="card-link">{b["Meeting Time"]}</a>
            <a  class="card-link">{"CRN: "+ b.CRN}</a>
        </div>
    </div>
    )})

	  }else{
	      options = this.state.list.map(b=><li key={b.Course} className="orng col-12">{b.Course}</li>)
    }


	return (
    <Container>
      <Row><div className="col-12"><Navbar/></div></Row>
      <Row><div id="jumbotron" className="col-12"><Jumbo/></div></Row>
      <Row className="head">
        <h1 className="list secTitle"> Search The Catalog</h1>
      </Row>
      <Row className="content">
        <YearSelect onYearChange={this.handleYearChange} class="col col-sm-12 col-md-4 col-lg-4" />
        <SemesterSelect onSemesterChange= {this.handleSemesterChange} class="col col-sm-12 col-md-4 col-lg-4" />
        <DepartmentSelect onDepartmentChange={this.handleDepartmentChange} class="col col-sm-12 col-md-4 col-lg-4" />
        <CCCSelect onCCCChange={this.handleCCCChange} class="col col-sm-12 col-md-6 col-lg-6" />
        <TimeSelect onTimeSubmit={ this.handleTimeSubmit} class="col col-sm-12 col-md-6 col-lg-6" />
      </Row>
      <Row className="head av"><h1 className="list secTitle" >Matching Courses</h1></Row>
      <Row className="content"><ul className="col-12 list-unstyled l" ><Row>{options}</Row></ul></Row>
    </Container>
   )
  }
}




export default CourseDisplay



// WEBPACK FOOTER //
// ./src/app.js
