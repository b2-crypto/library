import camelCase from 'lodash/camelCase';
// TODO: replace with real bundle ID.
const BUNDLE_ID = 'com.apexreactnative';
export function testID(key) {
    const resourceId = `${BUNDLE_ID}:id/${camelCase(key)}`;
    return { testID: resourceId };
    // Do we really need the accessibilityLabel to be used for testing purposes?
    // This might break real accessibility (used for screen readers, etc)
    // return { accessible: true, accessibilityLabel: key };
}
