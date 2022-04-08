import React from 'react';

import { useRoutes } from 'react-router-dom';

const Feedback = React.lazy(() => import('./Feedback'));
const ThankYou = React.lazy(() => import('./ThankYou'));

export default function FeedbackRouting(){
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Feedback />,
        },
        {
          path: '/thankyou',
          element: <ThankYou />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}
