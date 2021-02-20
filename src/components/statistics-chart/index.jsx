import React, { useState, useContext, useCallback } from 'react';
import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';
import useStyles from './useStyles';

function ToolTip({ title, viewsCount }) {
  const classes = useStyles();
  return <div className={classes.tooltip}>
    <span>{title}</span>
    <div className="viewsCount">
      {viewsCount} views
    </div>
  </div>
}

function StatisticsChart(props) {
  const {
    data, id,
  } = props;
  const classes = useStyles();

  const formatData = (data) => {
    return data.map((value, index) => ({
      x: index + 1,
      y: value.viewCount,
      title: value.title,
      link: `https://youtube.com/watch?v=${value.id}`
    }));
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
        tooltip={(v) => <ToolTip title={v.point.data.title} viewsCount={v.point.data.yFormatted} /> } // tooltip for interaction
        margin={{
          top: 20, right: 20, bottom: 130, left: 60,
        }}
        data={[
          {
            id: `view count`,
            data: formatData(data[id]),
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
        }}
        axisBottom={{
          legend: `views count of channel ${id}`,
          legendOffset: 40,
          legendPosition: 'middle',
        }}
        onClick={(e) => {
          window.open(
            e.data.link,
            '_blank' // <- This is what makes it open in a new window.
          );
        }}
      />
    </div>
  );
}

export default StatisticsChart;

StatisticsChart.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
};
