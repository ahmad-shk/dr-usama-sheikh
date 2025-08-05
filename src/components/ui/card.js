// src/components/ui/card.js

import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl shadow p-6 bg-white ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`text-gray-700 text-sm ${className}`}>
    {children}
  </div>
);
