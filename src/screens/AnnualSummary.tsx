import * as React from 'react';
import { Avatar, Button, ListItem, Badge } from 'react-native-elements';
import {RefreshControl, StyleSheet, ScrollView,FlatList, ActivityIndicator } from 'react-native';
import {Text, View, TouchableHighlight } from "react-native";


// FlatList Item
  const Item = (athlete) => {
    return (
            <View>
            <ListItem style={styles.Item} bottomDivider >
                <Avatar rounded source={{uri: athlete.athlete.picture}} />
                <ListItem.Content>
                  <ListItem.Title>{athlete.athlete.name}</ListItem.Title>
                  <ListItem.Subtitle>
                    <Score points={athlete.athlete.Summary.Run} threshold="0" type="🏃" />
                    <Score points={athlete.athlete.Summary.Ride} threshold="0" type="🚴" />
                    <Score points={athlete.athlete.Summary.Walk} threshold="0" type="🚶" />
                    <Score points={athlete.athlete.Summary.Swim} threshold="0" type="🏊" />
                    <Score points={athlete.athlete.Summary.Others} threshold="0" type="🤸" />
                 </ListItem.Subtitle>
                 </ListItem.Content>
                <TotalScore points={athlete.athlete.Summary.Total} threshold="5300" type="" />
             </ListItem>
            </View>
    )
  }

  const TotalScore = (props) => {
    var  color="error";
    if (props.points >= 2*props.threshold) { color = "primary"; }
    else if (props.points >= props.threshold) { color = "success"; }
    else if (props.points >= props.threshold/2) { color = "warning"; }
    else { color="error"; }
    return (
     <Badge
      badgeStyle={{}}
      containerStyle={{}}
      status={color}
      textProps={{}}
      textStyle={{fontSize:14, color: "#EFE" }}
      style={styles.hi}
      value={props.points+props.type}
      options={{}}
    /> )
  }

const Score = (props) => {
    var  color="primary";
    return (<Text>{props.points+props.type}  </Text>);
  }



const f = (a,b) => { return b.Summary.Total-a.Summary.Total }

class AnnualSummary extends React.Component {

  state = { isLoaded: false, isFetching:false, yearly : [] } ; 
   
  refreshDataFromApi = () => {
      this.setState({ isFetching: true } );
      fetch( "https://api.everymovecounts.dk/athlete/summary?type=yearly")
        .then(response => response.json())
        .then(data => {
                 //console.log(data);
                 data.sort(f);
                 this.setState({ yearly : data, isLoaded: true, isFetching:false});
        }); 
  }
  
  componentDidMount() {
    this.refreshDataFromApi();
  }
  render () {
        if (this.state.isLoaded) {
          return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    data={this.state.yearly}
                    renderItem={({item}) => <Item athlete={item}/>}
                    keyExtractor={item => item.id}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.isFetching}
                        onRefresh={()=>this.refreshDataFromApi()}
                      />}
                />

            </View>
          );
        }
        else {
          return (
            <View style={[styles.container, styles.horizontal]}>
             <ActivityIndicator size="large" color="#0000ff"  /> 
            </View>
          );
        }
  }

}

export default AnnualSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal : {
    flexDirection: "row",
    justifyContent: "space-around",
    padding:10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding:10,
    marginLeft: 'auto',
    marginRight:'auto'
  },
  separator: {
    marginVertical: 10,
    height: 2,
    width: '100%',
  },
  item: {
    fontSize: 20,
  },
  hi: {
    fontSize: 12,
    alignContent : 'flex-end',
  },
});
