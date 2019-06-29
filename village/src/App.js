import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import axios from 'axios';
import { Route } from 'react-router-dom';
import SmurfForm from './components/SmurfForm';
import MainPage from './components/MainPage';
import UpdatePage from './components/UpdatePage';
import SmurfPage from './components/SmurfPage';
import Navigation from './components/Navigation';


const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html {
  font-size: 62.5%;
}
body{
  box-sizing: border-box;
  background: #7B506F;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  }
`;

const AppContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
  margin: 0;
  width: 95.25%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    };
  }

  componentDidMount() {
		axios
			.get('http://localhost:3333/smurfs')
			.then((response) => {
				this.setState({
					smurfs: response.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
 
  addSmurf = (smurf) => {
		axios
			.post(`http://localhost:3333/smurfs`, smurf)
			.then((response) => {
				this.setState({
          smurfs: response.data,
				});
			})
			.catch((err) => console.log(err));
  };
  deleteSmurf = (id) => {
		axios
			.delete(`http://localhost:3333/smurfs/${id}`)
			.then((response) => {
				this.setState({
					smurfs: response.data
				});
			})
			.catch((err) => console.log(err));
  };
  updateSmurf = (smurf, id) => {
		axios
			.put(`http://localhost:3333/smurfs/${id}`, smurf)
			.then((response) => {
				this.setState({
					smurf: response.data
				});
			})
			.catch((err) => console.log(err));
	};
 
  render() {
    return (
      <React.Fragment>
      <GlobalStyle />
      <AppContainer>
        <Navigation />
        <Route 
        exact path ={'/'}
        render={()=>(
          <MainPage 
          smurfs={this.state.smurfs}
          name={this.state.name}
          age={this.state.age}
          height={this.state.height}
          />
        )}
        />
        <Route 
        path={'/details/:id'}
        render={(props)=>(
          <SmurfPage
          {...props}
          smurfs={this.state.smurfs}
          deleteSmurf={this.deleteSmurf}
          updateSmurf={this.updateSmurf}
          />
        )}
        />
        <Route 
        path={'/add'}
        render={(props)=> (
          <SmurfForm 
          {...props}
          addSmurf={this.addSmurf}
          mode="Add Smurf"
          />
        )}
        />
        <Route 
        path={'/update/:id'}
        render={(props)=> (
          <UpdatePage 
          {...props}
          smurfs={this.state.smurfs}
          updateSmurf={this.updateSmurf}
          mode={'Update Smurf'}
          />
        )}
        />

      </AppContainer>

      </React.Fragment>
    );
  }
}

export default App;
