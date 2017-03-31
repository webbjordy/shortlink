import React from 'react';
import { Link } from 'react-router';

export default () => {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
        <h1>Page Not Found</h1>
          <p>This isn't the page you're looking for</p>
            <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
