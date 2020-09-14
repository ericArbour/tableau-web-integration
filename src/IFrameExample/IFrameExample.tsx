import React, { useState } from 'react';

import styles from './IFrameExample.module.css';

export default function IFrameExample() {
  const [year, setYear] = useState('2013');
  const [gender, setGender] = useState('');

  const yearFilter = encodeURI(`&Academic Year=${year}`);
  const genderFilter = gender ? encodeURI(`&Gender=${gender}`) : '';

  return (
    <div className={styles['iframe-example']}>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
      </select>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">All</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
      </select>
      <iframe
        title="storms"
        src={`https://public.tableau.com/views/RegionalSampleWorkbook/College?:showVizHome=no&:embed=yes&:tabs=no&:toolbar=no${yearFilter}${genderFilter}`}
        width="900"
        height="700"
      />
    </div>
  );
}
