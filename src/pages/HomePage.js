import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Label from '../assests/fallback.jpg';

class HomePage extends Component {

    state = {
        beers: {
            style: {},
        }
      }

    
      componentDidUpdate() {
        //this.getData();
        
      }

      componentDidMount() {
        this.getData();
      }
    
    
      fetchBrewery() {
        console.log("click")
        this.getData();
      }
    
      getData() {
        var url = 'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/random/?withBreweries=Y&hasLabels=Y&key=a5c1b917e7ba62dcd79f434ed73bc72d';
    
        //var url = 'https://jsonplaceholder.typicode.com/posts'
    
        fetch(url, {
          method: 'GET',
          headers:{
            'Content-Type':  'application/json'
          }
        }).then(resp => resp.json()).then(response => {
          console.log('Success:', response);
          // this.setState({beers: response});
          this.setState({beers: response.data});
          localStorage.setItem("beers","dataStore");
          //this.setState({beerDesc: response.data.style});
          //console.log("beers data", this.state.beers.style);
        })
        .catch(error => console.error('Error:', error));
      }
    
      
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
          margin: '0'
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
                          <button type="button" className="btn btn-secondary" onClick={ this.fetchBrewery.bind(this) } style={ this.getStyle() }>
                          Get Random Beer
                          </button>

                            

                      </div>    
                    </div>
                  </header>  

                  <main>
                    <div className="container-fluid">
                        
                          <div className="row">

                              {/* Image Section */}
                              <div className="col-md-6 col-sm-12" style={this.imgStyle()}>
                              <Link to="/details"> 
                                <img src={Label} alt="Brewery Label"  className="img-responsive"/>
                              </Link>  
                              </div>

                              {/* Text Section */}
                              <div className="col-md-6 col-sm-12 ">


                                <Link to={{
                                    pathname: '/details',
                                    state: beers
                                    }}> <div className="col-sm-12 text-center" style={ this.breweryHead() }>
                                    <h1>{beers.name}</h1>
                                  </div> 
                                </Link>

                                  <div className="col-sm-12 text-center" style={ this.breweryBody() }>
                                     <p>{
                                       beers.style.description
                                
                                       }</p>
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

export default HomePage
