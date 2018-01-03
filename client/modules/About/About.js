import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style

const About = (props) => {
  return (
    <div>
      <h2>About Me!!!</h2>
      <div>
        Nam elit massa, laoreet vitae sem pellentesque, fermentum sagittis elit. Curabitur elit orci, imperdiet hendrerit lorem vel, gravida rhoncus risus. Vivamus eu est quis ligula rutrum tristique. Integer scelerisque ornare est, at aliquet purus facilisis et. Nam convallis sollicitudin dictum. Etiam tincidunt nunc eu ligula blandit, at posuere magna faucibus. Ut venenatis blandit ex, lobortis condimentum nisl congue eget. Nulla scelerisque tincidunt aliquet. Donec malesuada sem eu tempor feugiat. Quisque quis lobortis ipsum. Mauris eget interdum risus, id ultricies felis.
        Maecenas auctor augue eu augue semper accumsan. Aliquam id feugiat mauris. Cras quis tortor sodales, lacinia diam condimentum, pellentesque neque. Cras sed sem vitae ipsum molestie accumsan vitae in ante. Etiam tempor, tortor sed scelerisque interdum, arcu nulla dignissim leo, non euismod felis lorem vitae felis. Nam ut est eleifend, scelerisque diam ut, ullamcorper elit. Quisque hendrerit nulla augue, eget finibus justo malesuada vel. Donec imperdiet varius luctus. Praesent leo urna, efficitur a sodales a, tempus quis odio. Suspendisse iaculis libero at aliquet viverra. Aenean dolor metus, dignissim sed dui non, lobortis sollicitudin lacus. Etiam fringilla, justo a dapibus euismod, odio est ultricies sapien, id elementum nunc magna eu massa. Praesent tempor mollis varius. Praesent ex ipsum, iaculis ac mi id, mattis ullamcorper tortor.
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
