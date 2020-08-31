import React, { Component } from 'react';
import Label from '../assests/fallback.jpg';
import { Link, withRouter } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FcFactory } from 'react-icons/fc';
import { FaLocationArrow } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';



//import { BrowserRouter as Router, Route} from 'react-router-dom';

class BreweryDetails extends Component {

    getStyle = () => {
        return {
          fontSize: '40px',
          backgroundColor: '#000',
          color: '#fff'
        }
      }
    
      breweryHead = () => {
        return {
          fontSize: '30px',
          backgroundColor: '#B0B9C2',
          color: '#000',
          marginBottom: '15px',
          padding: '15px'
        }
      }
    
      breweryBody = () => {
        return {
          fontSize: '20px',
          backgroundColor: '#f1c545',
          color: '#000',
          padding: '15px',
          marginBottom: '30px'
        }
      }

      breweryBodyDesc = () => {
        return {
          fontSize: '20px',
          backgroundColor: '#C5C6C8',
          color: '#000',
          padding: '15px',
          marginBottom: '30px'
        }
      }

      

      #DAD3CB

    
      breweryFooter = () => {
        return{
          backgroundColor: '#FDE799',
          color: '#000',
          padding: '15px',
          textAlign: 'center',
          fontSize: '12px',
          margin: '0'
        }
      } 

      getDetailStyle = () => {
          return{
            // backgroundColor: '#EEEEEE',
          }
      }
    
    
      imgStyle = () => {
        return{
          marginBottom: '15px'
        }
      }

      backicon = () => {
          return{
            verticalAlign: 'middle'
          }
      }

      backiconnew = () => {
          return{
            verticalAlign: 'middle',
          }
      }

      state=  {
          details: {
              style: {},
              breweries: [{
                locations: []
              }]
          }
      }

      componentDidMount() {

        //let prevDetails = {}

        if(this.props.location.state) {
            console.log("data receive", this.props.location.state);
            this.setState({details: this.props.location.state})
            localStorage.setItem("storeDynamic","storeData")
        }  

       // prevDetails = this.state.details

    }
    

    render() {
        
        const {details} = this.state; 


        //const BrowserHistory = require('react-router/lib/BrowserHistory').default;  


    return (
        <React.Fragment>
            <header className="text-center">
                        <div className="jumbotron">
                            <div className="container-fluid"> 
                                <h1>The Random Beer App</h1>
                                <p>
                                If true love had a taste, it would be a cold beer.
                                </p>
                                {/* <button type="button" class="btn btn-secondary" style={ this.getStyle() }>
                                Get Random Beer
                                </button> */}
                            </div>    
                        </div>
            </header>  

            <nav className="navbar navbar-light bg-dark" style={ this.getDetailStyle() }>
                 <Link to={{pathname: '/', state: details}} className="navbar-brand" > <FaAngleDoubleLeft  style={ this.backicon() } /> Back </Link>
            </nav>
            
        
            <main>
                <div className="container-fluid">
                    
                    <div className="row">

                            {/* Image Section */}
                            <div className="col-md-6 col-sm-12" style={this.imgStyle()}>
                                <img src={Label} alt="Brewery Label"  className="img-responsive" width="100%"/>
                            </div>

                            {/* Text Section */}
                            <div className="col-md-6 col-sm-12 ">

                            <div className="col-sm-12 text-center" style={ this.breweryBody() }>

                                    {/* Brewery Details Starts*/}

                                    {
                                        details.breweries[0] != undefined && (<p>
                                            <FcFactory style={ this.backiconnew() }/> Brewery Name - <strong>{details.breweries[0].name}</strong></p>)
                                    }

                                    {
                                        details.breweries[0].locations[0] != undefined && (<p> 
                                            <FaCalendarAlt style={ this.backiconnew() }/> Since - {details.breweries[0].locations[0].yearOpened}</p>)
                                    }

                                    {
                                        details.breweries[0].locations[0] != undefined && (<p> 
                                           <FaLocationArrow style={ this.backiconnew() }/> {details.breweries[0].locations[0].streetAddress}, {details.breweries[0].locations[0].region} </p>)
                                    }
                                    

                                    {/* Brewery Details Ends*/}       
                            </div>
                                
                            <div className="col-sm-12 text-center" style={ this.breweryBodyDesc() }>
                                <p>{details.style.description}</p>
                            </div>

                            
                            
                            
                                
                            </div>          

                    </div>

                </div>
            </main>

            <footer>
                <p id="homefooter" style={ this.breweryFooter() }>
                @TheRandomBeerApp ©PrasantVishwakarma
                </p>
            </footer>
        </React.Fragment>
    )

    }
}

export default withRouter(BreweryDetails);





