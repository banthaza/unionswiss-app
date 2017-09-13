class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Main"
        onPress={() =>
          navigate('Main', { })
        }
      />
    );
  }
}