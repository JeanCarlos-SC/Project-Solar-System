import React from 'react';
import Title from './Title';
import MissionData from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        {MissionData.map((mission) => {
          const { name, year, country, destination } = mission;
          return (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />);
        })}
      </div>
    );
  }
}

export default Missions;
