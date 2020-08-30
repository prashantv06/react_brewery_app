import React, { Component } from 'react';
import Label from '../assests/fallback.jpg';
import { Link, withRouter } from 'react-router-dom';
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
          backgroundColor: '#C5C6C8',
          color: '#000',
          padding: '15px',
          marginBottom: '15px'
        }
      }
    
      breweryFooter = () => {
        return{
          backgroundColor: '#DAD3CB',
          color: '#000',
          padding: '15px',
          textAlign: 'center',
          fontSize: '12px',
          margin: '0',
         // position: 'absolute',
          bottom: '0'
        }
      }  

      getDetailStyle = () => {
          return{
            backgroundColor: '#EEEEEE',
          }
      }
    
    
      imgStyle = () => {
        return{
          marginBottom: '15px'
        }
      }

      state=  {
          details: {
              style: {

              }
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
            {/* <header className="text-center">
                        <div className="jumbotron">
                            <div className="container-fluid"> 
                                <h1>The Random Beer App</h1>
                                <p>
                                If true love had a taste, it would be a cold beer.
                                </p>
                                <button type="button" class="btn btn-secondary" style={ this.getStyle() }>
                                Get Random Beer
                                </button>
                            </div>    
                        </div>
            </header>   */}

            <header className="text-center">
                    <nav className="navbar navbar-light bg-dark" style={ this.getDetailStyle() }>
                        {/* <a class="navbar-brand" href="#">Navbar</a> */}
                        <Link to={{pathname: '/', state: details}} className="navbar-brand" > Back </Link>
                    </nav>
            </header>
        
            <main>
                <div className="container-fluid">
                    
                    <div className="row">

                            {/* Image Section */}
                            <div className="col-md-6 col-sm-12" style={this.imgStyle()}>
                            <img src={Label} alt="Brewery Label"  className="img-responsive"/>
                            </div>

                            {/* Text Section */}
                            <div className="col-md-6 col-sm-12 ">

                                <div className="col-sm-12 text-center" style={ this.breweryHead() }>
                                    <h1>{details.name}</h1>
                                </div>
                                
                                <div className="col-sm-12 text-center" style={ this.breweryBody() }>
                                    <p>{details.style.description}</p>
                                </div>


                            
                                
                            </div>          

                    </div>

                </div>
            </main>

            <footer>
                <p className="" style={ this.breweryFooter() }>
                @gdfhjdskjfhdkjfh
                </p>
            </footer>
        </React.Fragment>
    )

    }
}

export default withRouter(BreweryDetails);





