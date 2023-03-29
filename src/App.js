import logo from './logo.svg';
import './App.css';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import TheWhale from "../src/components/thewhale.jpg"
import Pearl from "../src/components/pearl.jpeg"
import Weird from "../src/components/weird-the-al-yankovic-story.jpeg"
import StarRating from './StarRating';

class App extends React.Component{

  state = {
    username1:'',
    username2:'',
    username3:'',
    review1:'',
    review2:'',
    review3:''
  };

  getValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value });    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const username1 = this.state.username1;
    const username2 = this.state.username2;
    const username3 = this.state.username3;
    const review1 = this.state.review1;
    const review2 = this.state.review2;
    const review3 = this.state.review3;
    console.log('Username1 on Submit:', username1)
    console.log('Review1 on Submit:', review1)
    console.log('Username2 on Submit:', username2)
    console.log('Review2 on Submit:', review2)
    console.log('Username3 on Submit:', username3)
    console.log('Review3 on Submit:', review3)
    
  };

render(){
  console.log('State:', this.state)
    return(
<div className='background'>
      <div>
          <h1 className=' mainH border pt-4 ps-5 pb-4 mb-5'>TheReview | 2022</h1>
{/* -------------------------------------------------------------------------------- */}
          <h2 >The Whale</h2><br/>
          <div class="container">
          <div class="row">
              <div class="col-sm-4 imageBox p-2">
              <img src ={TheWhale}></img></div>
              <div class="col-8 ">
                  <h1 className='mt-5 ms-3'>Ratings & Reviews: </h1>
                <div className='nameBox'>
                  <p>Name:</p>
                    {this.state.username1}
                  
                </div>
                <br/>
                <div className='reviewBox fakePlaceholder'>
                
                  <p>Review:</p>
                  {this.state.review1}
                  
                </div>
                </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-4 inputBox">
            <form>
            <StarRating/>
              <div>
                  <h4>Leave A Review!</h4>
                  <label htmlFor="" ></label>
                  <input type="text" onChange={this.getValue} name='username1' placeholder='Name'/><br/>
              </div>

              <div>    
                  <textarea type="textarea" onChange={this.getValue} name='review1' placeholder='Write a review'/><br/>
                  <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
              </div>
          </form>  
            </div>
            <div class="col-8 rightOfInput"></div>
          </div>
        </div>

        
          
          
          
        
{/* -------------------------------------------------------------------------------- */}

<h2 >Pearl</h2><br/>
          <div class="container">
          <div class="row">
              <div class="col-sm-4 imageBox p-2">
              <img src ={Pearl}></img></div>
              <div class="col-8 reviews">
                  <h1 className='mt-5 ms-3'>Ratings & Reviews: </h1>
                <div className='nameBox'>
                  <p>Name:</p>
                    {this.state.username1}
                  
                </div>
                <br/>
                <div className='reviewBox'>
                  <p>Review:</p>
                  {this.state.review1}
                </div>
                </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-4 inputBox">
            <form>
              <div>
              <StarRating/> 
                  <label htmlFor="" ></label>
                  <input type="text" onChange={this.getValue} name='username1' placeholder='Name'/><br/>
              </div>

              <div>    
                  <textarea type="textarea" onChange={this.getValue} name='review1' placeholder='Write a review'/><br/>
                  <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
              </div>
          </form>  
            </div>
            <div class="col-8 rightOfInput"></div>
          </div>
        </div>

{/* -------------------------------------------------------------------------------- */}
<h2 >Weird</h2><br/>
          <div class="container">
          <div class="row">
              <div class="col-sm-4 imageBox p-2">
              <img src ={Weird}></img></div>
              <div class="col-8 reviews">
                  <h1 className='mt-5 ms-3'>Ratings & Reviews: </h1>
                <div className='nameBox'>
                  <p>Name:</p>
                    {this.state.username1}
                  
                </div>
                <br/>
                <div className='reviewBox '>
                
                  <p>Review:</p>
                  {this.state.review1}
                  
                </div>
                </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-4 inputBox">
            <form>
              <div>
              <StarRating/>
                  <h4>Leave A Review!</h4>
                  <label htmlFor="" ></label>
                  <input type="text" onChange={this.getValue} name='username1' placeholder='Name'/><br/>
              </div>

              <div>    
                  <textarea type="textarea" onChange={this.getValue} name='review1' placeholder='Write a review'/><br/>
                  <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
              </div>
          </form>  
            </div>
            <div class="col-8 rightOfInput"></div>
          </div>
        </div>

{/* -------------------------------------------------------------------------------- */}
          </div>
        </div>
    );
  }
}


export default App;
