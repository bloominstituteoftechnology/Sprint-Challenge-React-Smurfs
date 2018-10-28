import React from "react"

const SingleSmurf = props => {
	const id = props.match.params.id

	const singleSmurf = props.smurfs.find(smurf => {
		return String(smurf.id) === id
	})

	console.log(singleSmurf)

	return singleSmurf ? (
		<div className="Smurf card teal lighten-5">
			<div className="card-content">
				<h3>
					{" "}
					<i className="material-icons prefix md-36">
						sentiment_very_satisfied
					</i>{" "}
					{singleSmurf.name}{" "}
				</h3>
				<strong>{singleSmurf.height} tall</strong>
				<p>{singleSmurf.age} smurf years old</p>
			</div>
		</div>
	) : (
		<p>Loading Smurfs</p>
	)
}

export default SingleSmurf
