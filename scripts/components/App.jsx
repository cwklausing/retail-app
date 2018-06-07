import React, { Component, Fragment } from 'react';
import Item from './item/Item';
import Loader from './loader/Loader';
import ErrorPage from './error-page/ErrorPage';
import axios from 'axios';

class App extends Component {
  state = {
    itemData: false,
    loading: true
  };

  componentDidMount = () => this.getItemData();

  getItemData = () => {
    axios
      .get('/public/mock-data/item-data.json')
      .then(res => {
        const item = res.data.CatalogEntryView[0];

        this.setState({
          itemData: item,
          loading: false
        });
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  };

  render = () => {
    const { itemData, loading, dataError } = this.state;
    return (
      <Fragment>
        {loading && <Loader />}
        {!loading && (
          <Fragment>
            {itemData ? <Item item={itemData} /> : <ErrorPage />}
          </Fragment>
        )}
      </Fragment>
    );
  };
}

export default App;
