import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props){
    console.log('constructor');
    super(props);
    this.state= {
      box: [0],
    }
  }
  hideShow(value){
    if(document.getElementsByClassName("hideId"+value)[0].style.display == 'none'){
      document.getElementsByClassName("hideId"+value)[0].style.display='block';
    } else {
      document.getElementsByClassName("hideId"+value)[0].style.display='none';
    }
  }
  addBox = e => {
   e.stopPropagation();
    this.state.box.splice(1,0,this.state.box.length);
    this.setState({
      box: this.state.box
    })
  }
  deleteBox= e => {
    e.stopPropagation();
    this.state.box.splice(0,1);
    this.setState({
      box: this.state.box
    })
  }
	render() {
    console.log('render');
		return (
      <div>
      
      {this.state.box.map((index,key) => {
        return <div className="mainBlock" onClick={this.hideShow.bind(this,++key)} data-index={key} data-value={key}>
        <div><span>Funnel Step {key}</span><span><span  className="icon" onClick={this.addBox}>+</span><span onClick={this.deleteBox.bind(this)} className="icon">-</span></span></div>
        <div>
          <span className="icon">+</span><span className="icon">o</span>
          <select>
            <option>Select Condition</option>
            <option>Gaurav</option>
            <option>Gaurav</option>
          </select>
          <span className="icon close">x</span>
        </div>
        <section className={"hideId"+key}>
        <div>
        <select>
            <option>Add</option>
            <option>Gaurav</option>
            <option>Gaurav</option>
          </select>
          <select>
            <option>Select Condition</option>
            <option>Gaurav</option>
            <option>Gaurav</option>
          </select>
          <span className="icon close">x</span>
        </div>
        <div>
        <select>
            <option>Add</option>
            <option>Gaurav</option>
            <option>Gaurav</option>
          </select>
          <select>
            <option>Select Condition</option>
            <option>Gaurav</option>
            <option>Gaurav</option>
          </select>
          <span className="icon close">x</span>
        </div>
        </section>
      </div>
      })}
      
    </div>

		)
	}
}


export default App;
