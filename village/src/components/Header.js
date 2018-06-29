import React from 'react';
import { Link } from 'react-router-dom' ;

const Header = () => {
  return (
    <div>
      <h2>You are welcome guests in the Smurf Village</h2>
      <Link to="/smurfs">
        <button>Enter the Village</button>
      </Link>
    </div>
  )
}

export default Header;

{/* <Route exact path='/village' render={ (routeProps) => 
  
  <SmurfForm {...routeProps} saveSmurf={this.addSmurf} name='' height='' age='' id={undefined}/> 
  } 
/>
        <Route path='/village' render={ (routeProps) =>   
        <Smurfs {...routeProps} smurfs={this.state.smurfs} makeDelete={this.makeDelete} makeEdit={this.makeEdit} />} 
        />
      </div>
    );
  }
}

export default App; */}
