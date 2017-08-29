getData() {
    let url = 'https://facebook.github.io/react-native/movies.json';
    return fetch(url)
      .then((res)=> res.json())
      .then((resJson) => {
        this.setState({data: resJson});
        return resJson;
      })
      .catch (error => {
        conosle.log(error.message);
      })
  }