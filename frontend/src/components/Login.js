import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

function Login() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>PollMaster</h1>
      <p>You are logged in and ready to vote or create polls!</p>
    </div>
  );
}

export default withAuthenticator(Login);