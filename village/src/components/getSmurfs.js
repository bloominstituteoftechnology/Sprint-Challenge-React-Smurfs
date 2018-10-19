
getSmurfs(){
  axios
  .get('http://localhost:3333/smurfs')
  .then(smurfs => this.setState({ smurfs: smurfs.data }))
  .catch(error => console.log(error));
}

module.exports = { getSmurfs };
