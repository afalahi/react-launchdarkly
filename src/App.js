import React from 'react';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import { v4 } from 'uuid';

import UserProfile from './UserProfile';
import { GridColumn, Grid } from 'semantic-ui-react';

const App = () => {
  return (
    <Grid columns={4} centered>
      <GridColumn>
        <UserProfile />
      </GridColumn>
    </Grid>
  );
};

export default withLDProvider({
  clientSideID: process.env.REACT_APP_CLIENT_KEY,
  user: {
    key: v4(),
    name: 'adam.smith',
    email: 'adam.smith@unique.com',
  },
})(App);
