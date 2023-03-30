// import axios from 'axios';

// const testFetch = async () => {
//   const { data } = await axios.get('http://localhost:1956');

//   console.log(data);
// };

// const foo = testFetch();

import React from 'react';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root') as HTMLElement;
// createRoot(root).render('hi');
createRoot(root).render(<hr />);
