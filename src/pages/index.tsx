import React, { PureComponent } from 'react';
import Layout from '../layout';
import Home from '../components/pages/home';

interface IProps {
  location: {
    pathname: string
  }
}

const Index: React.FunctionComponent<IProps> = ({ location }: IProps) => {
  return (
    <Layout location={location || null}>
      <Home />
    </Layout>
  );
}

export default Index;

