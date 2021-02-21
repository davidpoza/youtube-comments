import React, { useState, useContext, useCallback } from 'react';
import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';

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

  const formatData = (data) => {
    return data.map((value, index) => ({
      x: index + 1,
      y: value.ageViewsRatio,
      viewCount: value.viewCount,
      age: value.age,
      title: value.title,
      link: `https://youtube.com/watch?v=${value.id}`,
      thumbnail: value.thumbnail,
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
            id: 'ratio views count / age',
            data: formatData(data),
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
          legend: 'age/views ratio',
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
    </div>
  );
}

export default withIsMobile(StatisticsChart);

StatisticsChart.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
};
