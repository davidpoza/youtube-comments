import React, { useState, useContext, useCallback } from 'react';
import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// own
import useStyles from './useStyles';
import withIsMobile from '../../hocs/with-is-mobile';

function ToolTip({ title, viewsCount, age, imageUrl }) {
  const classes = useStyles();
  return (
    <div className={classes.tooltip}>
      <span>{title}</span>
      <div className="viewsCount">
        {`${viewsCount} views - ${age} days ago`}
      </div>
      <img src={imageUrl} alt="video thumbnail" />
    </div>
  );
}

function StatisticsChart({
  data, id, isMobile,
}) {
  const classes = useStyles();
  const [ratioView, setRatioView] = React.useState(false);

  const formatData = (data, ratioView) => {
    return data.map((value, index) => ({
      x: index + 1,
      y: ratioView ? value.ageViewsRatio : value.viewCount,
      viewCount: value.viewCount,
      age: value.age,
      title: value.title,
      link: `https://youtube.com/watch?v=${value.id}`,
      thumbnail: value.thumbnail,
    }));
  };

  const handleSwitchChange = (event) => {
    setRatioView(event.target.checked);
  };

  if (!id || !data) return null;
  return (
    <div className={classes.root}>
      <ResponsiveLine
        colors={{ scheme: 'set1' }}
        pointSize={4}
        curve="monotoneX"
        useMesh // interaction with mouse
        animate={false}
        tooltip={
          (v) => (
            <ToolTip
              title={v.point.data.title}
              ageViewsRatio={v.point.data.yFormatted}
              viewsCount={v.point.data.viewCount}
              age={v.point.data.age}
              imageUrl={v.point.data.thumbnail}
            />
          )
        }
        margin={{
          top: 20, right: 20, bottom: 130, left: 60,
        }}
        data={[
          {
            id: ratioView ? 'ratio views count / age' : 'views count',
            data: formatData(data, ratioView),
          },
        ]}
        xScale={{
          type: 'linear',
        }}
        // xFormat="time:%H:%M" // used in tootltips
        yScale={{
          type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          legendOffset: 13,
          legend: ratioView ? 'age/views ratio' : 'views count',
        }}
        axisBottom={{
          legend: 'videos',
          legendOffset: 40,
          legendPosition: 'middle',
        }}
        onClick={(e) => {
          if (!isMobile) {
            window.open(
              e.data.link,
              '_blank', // <- This is what makes it open in a new window.
            );
          }
        }}
      />
      <FormGroup row>
        <FormControlLabel
          control={<Switch checked={ratioView} onChange={handleSwitchChange} name="ratioView" />}
          label="Enable ratio view"
        />
      </FormGroup>
    </div>
  );
}

export default withIsMobile(StatisticsChart);

StatisticsChart.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
};
