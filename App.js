import React, { Component } from 'react'
import { StyleSheet, Text,TextInput, ScrollView,View,Button} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols } from 'react-native-table-component';
import moment from 'moment';


class Inputs extends Component {
constructor(){
   super(); 
   this.state = {
      tableHead: ['Storage', 'Parcel 1', 'Parcel 2', 'Parcel 3','Parcel 4','Parcel 5'],
      tableHead2: ['House No'],
      tableTitle: ['1', '2', '3', '4','5','6','7','8','9','10','11', '12', '13', '14','15','16','17','18','19','20','21', 
      '22', '23', '24','25','26','27','28','29','30',],
    //first element is house no second element is date
    MainStorage:[
      [  ['24','|','2021/04/11'],['12','|','2021/04/09'],['26','|','2021/04/08'],['27','|','2021/04/07'],['28','|','2021/04/06']
      ],
      [  ['29','|','2021/04/05'],['30','|','2021/04/04'],['12','|','2021/04/03'],['50','|','2021/04/02'],['60','|','2021/04/01']
      ],
      [  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
      ],
      [  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
   ],
   [  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
   ],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
[  ['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0'],['0','|','0']
],
      
   ],
      UncollectedParcelArray:[],
      date:moment().format('YYYY/MM/DD'),
      houseNo:'',
      message:''
   } 
   }
   StoreData(date,houseno) {
     var flag='false';
     var data='false';

     //check if the data exist
     for (let i = 0; i < this.state.MainStorage.length; i++){

      for (let j = 0; j < this.state.MainStorage[i].length; j++)
      {
         for (let z = 0; z <this.state.MainStorage[i][j].length; z++){
            if(this.state.MainStorage[i][j][0]==houseno)
            {
               var data='true';
            }
         }

      }
     }
      //store data in the array
     for (let i = 0; i < this.state.MainStorage.length; i++) {
      for (let j = 0; j < this.state.MainStorage[i].length; j++)
      {
         for (let z = 0; z <this.state.MainStorage[i][j].length; z++) {
   
            if(flag=='false' && data=='false')
            {
               if(this.state.MainStorage[i][j][0]=='0' && this.state.MainStorage[i][j][2]=='0')
                  {
   
                     this.state.MainStorage[i][j][0]=houseno;
                     this.state.MainStorage[i][j][2]=date;
                     flag='true'
                     data='true';
                  }
                  else{
                     this.state.message="error loading data";
                  }
            }
            else{
               this.state.message="Record exist";
            }
            
   
         }
      }
      }
          
      
      this.setState({ houseno: '' })
      };


     RefStorage(){
         
         var now  = this.state.date;
         
         for (let i = 0; i < this.state.MainStorage.length; i++){
            for (let j = 0; j < this.state.MainStorage[i].length; j++)
            {
               for (let z = 0; z <this.state.MainStorage[i][j].length; z++){
                  
                  var then = this.state.MainStorage[i][j][2];
                  if(then!='0'){
                     var ms = moment(now,"YYYY/MM/DD").diff(moment(then,"YYYY/MM/DD"));
                     var d = ms / (1000 * 60 * 60 * 24)
                     if(d>2)
                     {
                       this.state.UncollectedParcelArray.push(this.state.MainStorage[i][j][0]);
                       this.state.MainStorage[i][j][0]='0';
                       this.state.MainStorage[i][j][2]='0';

                     }

                    //any uncollected parcel more than 2 days will be returned to sender
                    this.state.status = "Return the parcel to sender"; 
                  }
                  else{
                     this.state.status = "Keep the parcel in storage";
                  }
               }
      
            }
            this.setState({ houseno: '' })
         }   
         
         
       }
       //Function when the uncollected parcel send back to seller it will remove from uncollected parcel list
       Uncollected(key){

        // Copy the elements except the index
        // from original array to the other array
        anotherArray=[this.state.UncollectedParcelArray.length-1]
        for (var i = 0, k = 0; i < this.state.UncollectedParcelArray.length; i++) {
  
            // if the index is
            // the removal element index
            if (i == key) {
                continue;
            }
    
            // if the index is not
            // the removal element index
            anotherArray[k++] = this.state.UncollectedParcelArray[i];
        }
        this.state.UncollectedParcelArray=anotherArray;
        this.setState({ houseno: '' })
       }

      render() {
         return (
      <ScrollView  >
         <View style={styles.container}>
         <Text style={styles.headers}>Parcel Management System</Text>

               <View styles={styles.Inputcontainer}>
                  <Text style={styles.subheader}>House No:</Text>
                  <TextInput style={styles.input} onChangeText={(houseNo) => this.setState({houseNo})} placeholder='enter House No.'/>
               </View>
      
       
               <View style={styles.ButtonContainer}>
                        <Button style={styles.Button}  color="#1d2424" 
                        title="Submit"
                        onPress={() => this.StoreData(this.state.date,this.state.houseNo) }/>
               </View>

               <View style={styles.ButtonContainer}>
                        
                        <Button style={styles.Button} color="#1d2424" 
                        title="Refresh Storage"
                        onPress={() => this.RefStorage() }/>
               </View>
        
                
        
               <View style={styles.container}>
                  <Table borderStyle={{borderWidth: 1}}>
                      <Row data={this.state.tableHead} flexArr={[1, 1, 1, 1,1]} style={styles.head} textStyle={styles.text}/>
                  <TableWrapper style={styles.wrapper}>
                      <Col data={this.state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
                      <Rows data={this.state.MainStorage} flexArr={[1, 1, 1,1,1]} style={styles.row} textStyle={styles.text}/>
                   </TableWrapper>
                  </Table>
               </View>
      

              <View style={styles.container}>
                  <Text  style={styles.subheader}>Uncollected Parcel(Please send back the parcel to sender)</Text>
                  <Text  style={styles.subheader}>House No:</Text>
                  { this.state.UncollectedParcelArray.map((item, key)=>(
                  <Text key={key} style={styles.Text1} > {key+1})  { item }  ---<Button style={styles.Button}  color="#1d2424" 
                  title="Done"  onPress={() => this.Uncollected(key) }
                 /> </Text>)
                
                  ) }
                 
             </View>

         </View>
      </ScrollView  >
         ); 
         }
   }
  
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   Inputcontainer: {
      margin: 15,
      flexDirection: 'row',
      height: 40,  
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   
   Text1:{fontSize:20},
   headers:{
      fontWeight:'bold',
      alignItems: 'center',
      fontSize: 20,
      textAlign: 'center',
      margin: 20,
   },

   subheader:{
      fontWeight:'bold',
      fontSize: 15,

   },
   ButtonContainer:{
      flexDirection: 'column',
      marginHorizontal: 50,
      alignItems: 'flex-start', 
      margin: 10,
    },

    Button:{margin:10},

   head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
})