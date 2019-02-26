import React from 'react';
import pf from 'petfinder-client';

const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
})

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }
    componentWillMount (){
        petfinder.pet.get({
            output: "full",
            id: this.props.id
        }).then(data => {
            const pet = data.petfinder.pet;
            let breed;
            if (Array.isArray(data.petfinder.pet.breeds.breed)) {
                breed = data.petfinder.pet.breeds.breed.join(', ');
            } else {
                breed = data.petfinder.pet.breeds.breed
            }

            this.this.setState({

            })
        })
    }
    render() {
        return <h1>hi lol</h1>
    }
}

export default Details;