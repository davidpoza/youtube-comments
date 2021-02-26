import React, { useState, useContext, useCallback } from 'react';
import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// own
import useStyles from './useStyles';
import withIsMobile from '../../hocs/with-is-mobile';


function RelatedChart({
  data, id, isMobile,
}) {
  const classes = useStyles();


  if (!id || !data) return null;
  return (
    <div className={classes.root}>
      gráfico tipo tarta con los canales relacionados
    </div>
  );
}

export default withIsMobile(RelatedChart);

RelatedChart.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
};
