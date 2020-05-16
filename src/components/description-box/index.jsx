import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';
import useStyles from './useStyles';
import Linkify from 'react-linkify';
export default function DescriptionBox(props) {
  const [open, setOpen] = useState(false);
  const [btnText, setBtnText] = useState('SHOW MORE');
  const { text } = props;
  const classes = useStyles();
  const toggle = useCallback(() => {
    setBtnText(open ? 'SHOW MORE' : 'SHOW LESS');
    setOpen(!open);
  });
  return (
    <Typography
      variant="body1"
      component="div"
      className={classes.root}
      color="textPrimary"
    >
      <div className={clsx({
        [classes.dropDown]: true,
        [classes.dropDownOpen]: open,
      })}
      >
        {
          text.split('\n').map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <p className={item !== '' ? classes.paragraph : undefined} key={i}>
              <Linkify>
                {item}
              </Linkify>
            </p>
          ))
        }
      </div>
      <Link
        component="button"
        onClick={toggle}
        underline="none"
        className={classes.showMore}
      >
        {btnText}
      </Link>
    </Typography>
  );
}


DescriptionBox.propTypes = {
  text: PropTypes.string,
};
