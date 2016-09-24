import React from 'react';
import Reflux from 'reflux';
import MotelStore from '../stores/MotelStore';

var Motelgrid = React.createClass({

	mixins: [Reflux.connect(MotelStore, 'motelStore')],

	render: function(){
		if(this.state.motelStore){
			return (<div>
				{
					this.state.motelStore.map(function(image){
						return (<div key={image.id} className="image">
						<h4>{image.name}</h4>
						<a href = {image.URL_Video}>
							<img src={image.logo}></img>
						</a>
						<p>{image.description}</p>
						</div>)
					})
				}
				</div>)
		}
		else
		{
			return (<p>No hay informacion para mostrar</p>);
		}
	}
});

export default Motelgrid;