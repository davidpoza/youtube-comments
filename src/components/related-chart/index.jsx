import React from 'react';
import PropTypes from 'prop-types';
import { ResponsivePie } from '@nivo/pie'

// own
import useStyles from './useStyles';
import withIsMobile from '../../hocs/with-is-mobile';

function RelatedChart({
  data, id, isMobile,
}) {
  const classes = useStyles();

  const mytheme = {
    tooltip: {
      basic: { whiteSpace: 'pre', display: 'flex', alignItems: 'center' },
      container: {
        fontFamily: 'Roboto, sans-serif',
        background: 'white',
        color: 'inherit',
        fontSize: 'inherit',
        borderRadius: '2px',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
      },
      table: {},
      tableCell: { padding: '3px 5px' },
    },
    labels: {
      text: { fill: '#333333', fontSize: 9, fontFamily: 'Roboto, sans-serif', color: '#999999' }
    },
  };

  if (!id || !data) return null;
  return (
    <div className={classes.root}>
      <ResponsivePie
        data={data}
        margin={{ top: 20, right: 40, bottom: 20, left: 40 }}
        theme={mytheme}
        onClick={(e) => {
          if (!isMobile) {
            window.open(
              e.link,
              '_blank', // <- This is what makes it open in a new window.
            );
          }
        }}
      />
    </div>
  );
}

export default withIsMobile(RelatedChart);

RelatedChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  })),
  isMobile: PropTypes.bool,
  id: PropTypes.string,
};
