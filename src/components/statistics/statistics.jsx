import PropTypes from 'prop-types';
import { getRandomHexColor} from '../renderColor'

import { 
    Section, 
    StatList,
    Item,
    Label,
    Percentage
} from './statistics.styled'

export const Statistics = ({ title, stats }) => {
    return (
      <Section>
        {title && <h2>{title}</h2>}
        <StatList>
          {stats.map(({ id, label, percentage }) => {
            return (
              <Item
                key={id}   
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <Label>{label}</Label>
                <Percentage>{percentage}%</Percentage>
              </Item>
            );
          })}
        </StatList>
      </Section>
    );
  };

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      ).isRequired,
  }