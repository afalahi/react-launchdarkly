# LaunchDarkly React SDK Example

## Setup

### LaunchDarkly

- Create a feature flag called **enable_profile_v2**
- Check the box for *SDKs using Client-side ID*
- Flag Options:
  - Variations = Boolean
    - Variation 1 = true
    - Variation 2 = false
  - Save
- Click on the Flag to configure Targeting
  - Target Users who match these rule:
    - email > contains => unique.com
    - Serve => true
    - Default rule => false
  - Click Review and Save

### App

- Clone the repo and `npm install`
- Run `npm run postinstall`
- Rename the *env.local.sample* to *env.local*
- Add your SDK client key to the env.local as such `REACT_APP_CLIENT_KEY=<YOUR_CLIENT_KEY_GOES_HERE>
- Run `npm start`

## Usage

The App is very basic, it will serve a mock card taken from semantic-ui samples and displays it to the user if their email contains *unique.com*, otherwise it will display a place holder in the middle of the screen.
