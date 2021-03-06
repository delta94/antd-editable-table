import React from 'react';
import Select from 'antd/lib/select';

import classes from './Renderers.module.css';

const selectRenderer = (name: string): React.ReactNode => (
  <Select className={classes.editableSelect} value={name} />
);

export default selectRenderer;
