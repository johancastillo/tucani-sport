import React from 'react';
import TeamCard from '../components/TeamCard';

const Aboutus = () => {
    return (
        <div className="container page">
            <div className="row my-4">
                <div className="col-md-6">
                    <img src="/img/about-us.png" width="100%" alt="" />
                </div>
                
                <div className="col-md-6">
                    <h1 className="text-center">¿Quienes somos?</h1>

                </div>
            </div>

            <div className="row my-4">
                <TeamCard 
                    name="Alexander Guerra"
                    profession="Entrenador de boxeo"
                    image="/img/team/01.png"
                />
                <TeamCard 
                    name="Johan Castillo"
                    profession="Desarrollador Web Full Stack"
                    image="/img/team/02.png"
                />
            </div>

            
        </div>
    );
}

export default Aboutus;
