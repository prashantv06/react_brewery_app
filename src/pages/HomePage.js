import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Label from '../assests/fallback.jpg';
import { FaBeer } from 'react-icons/fa';
import '../App.css';
//import { FcFactory } from 'react-icons/fc';

class HomePage extends Component {

    state = {
        beers: {
            style: {},
            breweries: []
        }
      }

      componentDidMount() {
        if(this.props.location.state) {
            console.log("data receive", this.props.location.state);
            this.setState({beers: this.props.location.state})
        }  
        if(localStorage.getItem("storeDynamic") == null) {
            this.getData();
            console.log("localstorage is null")
        }
      }
    
    
      fetchBrewery() {
        console.log("click")
        this.getData();
      }
    
      getData() {
        var url = 'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/random/?withBreweries=Y&hasLabels=Y&key=a5c1b917e7ba62dcd79f434ed73bc72d';
    
        fetch(url, {
          method: 'GET',
          headers:{
            'Content-Type':  'application/json'
          }
        }).then(resp => resp.json()).then(response => {
          console.log('Success:', response);
          this.setState({beers: response.data});
        })
        .catch(error => console.error('Error:', error));
      }
    
      
      getStyle = () => {
        return {
          fontSize: '33px',
          backgroundColor: '#000',
          color: '#fff'
        }
      }
    
      breweryHead = () => {
        return {
          fontSize: '27px',
          backgroundColor: '#B0B9C2',
          color: '#000',
          marginBottom: '15px',
          padding: '15px'
        }
      }

      breweryTitleHead = () => {
          return {
            color: "#000"
            
          }
      }

      faicons = () => {
          return{
            verticalAlign: 'middle'
        }
      }
    
      breweryBody = () => {
        return {
          fontSize: '20px',
          backgroundColor: '#F4F1E0',
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
          margin: '0'
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
    
      imgStyle = () => {
        return{
          marginBottom: '15px'
        }
      }

      



    render() {

        const { beers } = this.state;

        return (
            <React.Fragment>
                  <header className="text-center">
                    <div className="jumbotron">
                      <div className="container-fluid"> 
                          <h1>The Random Beer App</h1>
                          <p>
                            If true love had a taste, it would be a cold beer.
                          </p>
                          <button id="getrandombtn" type="button" className="btn btn-secondary" onClick={ this.fetchBrewery.bind(this) } style={ this.getStyle() }
                          > Get Random Beer</button>
                      </div>    
                    </div>
                  </header>  

                  <main>
                    <div className="container-fluid">
                        
                          <div className="row">

                              {/* Image Section */}
                              <div className="col-md-6 col-sm-12" style={this.imgStyle()}>
                                
                                <img src={Label} alt="Brewery Label"  className="img-responsive" width="100%" />
                                

                                <div className="col-sm-12 text-center" style={ this.breweryBody() }>
                                    <h1> <FaBeer style={ this.faicons() }/> {beers.name}</h1>
                                </div> 


                              </div>

                              {/* Text Section */}
                              
                              <div className="col-md-6 col-sm-12 ">
                            
                                {/* Landing Page Beer Title */}

                                <Link to={{
                                    pathname: '/details',
                                    state: beers
                                    }}> <div id="brewHead" className="col-sm-12 text-center" style={ this.breweryHead() }> 

                                    {beers.breweries.map(brew => (
                                        <p key={brew.name}>Brewery Name - <strong id="brewHover" style={ this.breweryTitleHead() } >{brew.name}</strong></p>
                                    ))}
                                    </div>
                                </Link>

                                {/* Landing Page Beer Body */}
                                <div className="col-sm-12 text-center" style={ this.breweryBodyDesc() }>
                                    <p>{beers.style.description}</p>
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

export default HomePage
