import React, { Component } from 'react';
// import { Jumbotron } from 'reactstrap';
import './App.css';
import Label from './assests/fallback.jpg';
//import PropTypes from 'prop-types';

class App extends Component {

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
      backgroundColor: '#EEEEEE',
      color: '#000',
      marginBottom: '15px',
      padding: '15px'
    }
  }

  breweryBody = () => {
    return {
      fontSize: '20px',
      backgroundColor: '#D6CECC',
      color: '#000',
      padding: '15px',
      marginBottom: '15px'
    }
  }

  breweryFooter = () => {
    return{
      backgroundColor: '#D6CECC',
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
    return (
      
      <React.Fragment>
        <header className="text-center">
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
                  <h1>Thunder Ann</h1>
                </div>
                
                <div className="col-sm-12 text-center" style={ this.breweryBody() }>
                    <p>American pale ales range from deep golden to copper in color. 
                    The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. 
                    Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. 
                    One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. 
                    American pale ales have medium body and low to medium maltiness. 
                    Low caramel character is allowable. 
                    Fruity-ester flavor and aroma should be moderate to strong. 
                    Diacetyl should be absent or present at very low levels. 
                    Chill haze is allowable at cold temperatures.</p>
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
    );
  }  
}

export default App;
