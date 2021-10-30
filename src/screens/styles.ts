import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    flexDirection:"column"
  },
  imgContainer: {
    flex: 1,
  },
  loginContainer:{
    flex: 1,
    alignItems: 'center',
  },
  error: {
    color: 'red'
  },
  inputView: {
   backgroundColor: "#AAAAAA",
   borderRadius: 10,
   width: "50%",
   height: 45,
   marginBottom: 20,
 },
 TextInput: {
   height: 10,
   flex:1,
   padding: 10,
   marginLeft: 20,
 },
loginBtn: {
   borderRadius:10,
   height:40,
   width:180,
   marginTop:10,
   backgroundColor:"#22A",
 },

});
