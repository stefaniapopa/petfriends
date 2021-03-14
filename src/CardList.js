import React from 'react';
import Card from './Card';


const CardList = ({ pets }) => {
    return (
        <div>
            {
                pets.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={pets[i].id}
                            name={pets[i].name}
                            email={pets[i].email}

                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;