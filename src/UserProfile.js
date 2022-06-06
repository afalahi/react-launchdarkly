import React from 'react';
import {
  Card,
  Container,
  Grid,
  Icon,
  Image,
  Placeholder,
  Segment,
} from 'semantic-ui-react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const UserProfile = ({ flags }) => {
  if (flags.enableProfileV2) {
    return (
      <Card>
        <Image
          src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Adam</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2022</span>
          </Card.Meta>
          <Card.Description>
            Adam is struggling Actor living in SF
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' style={{ width: 'auto' }}>
              0 Friends
            </Icon>
          </a>
        </Card.Content>
      </Card>
    );
  }
  return (
    <Container>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default withLDConsumer()(UserProfile);
