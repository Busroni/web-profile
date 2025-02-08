import React from 'react';
import { createRoot } from 'react-dom/client';
import ProfileApp from './components/ProfileApp';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<ProfileApp />);