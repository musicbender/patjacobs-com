import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import { Gcms_Project, GatsbyLocation } from '../../../../types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

interface Props {
    project: Gcms_Project;
    allProjects: Gcms_Project[];
    location: GatsbyLocation;
}

export default class CaseStudy extends PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        console.log('cas study props', this.props);

        return (
            <div>
                <Link to="/">To Home</Link>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {};
// };

// const mapDispatchToProps = dispatch => {
//     return bindActionCreators({}, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CaseStudy);
