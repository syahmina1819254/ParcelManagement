import React, { Component } from 'react'
import { StyleSheet, Text,TextInput,SafeAreaView,View,Button} from 'react-native';
import Moment from 'moment';


class Inputs extends Component {
constructor(){
   super(); 
   this.state = {
    //first element is house no second element is date
    MainStorage:[
      [  ['24','2021-04-11'],['12','2021-04-09'],['26','2021-04-08'],['27','2021-04-07'],['28','2021-04-06']
      ],
      [  ['29','2021-04-05'],['30','2021-04-04'],['12','2021-04-03'],['50','2021-04-02'],['60','2021-04-01']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['12','12']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
     ],
     [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
   ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
],
   ],
      UncollectedParcelArray:[],
      date:Moment().format('YYYY-MM-DD'),
      houseNo:'',
      message:''
   } 
   }
   analyze(date,houseno) {
     var flag='false';
     var data='false';

     //check if the data exist
     for (let i = 0; i < this.state.MainStorage.length; i++){

      for (let j = 0; j < this.state.MainStorage[i].length; j++)
      {
         for (let z = 0; z <this.state.MainStorage[i][j].length; z++){
            if(this.state.MainStorage[i][j][0]==houseno && this.state.MainStorage[i][j][1]==date)
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
               if(this.state.MainStorage[i][j][0]=='0' && this.state.MainStorage[i][j][1]=='0')
                  {
   
                     this.state.MainStorage[i][j][0]=houseno;
                     this.state.MainStorage[i][j][1]=date;
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


      Analyze2(){
         var b = 0;
         var current = Moment().startOf('day');
         var duration=Moment.duration(current.diff(b)).asDays();
         
         for (let i = 0; i < this.state.MainStorage.length; i++){
            for (let j = 0; j < this.state.MainStorage[i].length; j++)
            {
               for (let z = 0; z <this.state.MainStorage[i][j].length; z++){
                  b = this.state.MainStorage[i][j][1];
                  duration=Moment.duration(current.diff(b)).asDays();
      
                  if(duration>2)
                  {
                    this.state.UncollectedParcelArray.push(this.state.MainStorage[i][j][0]);
                    this.state.MainStorage[i][j][0]='0';
                    this.state.MainStorage[i][j][1]='0';
                  }
               }
      
            }



         }   
       }

      render() {
         return (
          <View style={styles.container}>
         <View style={styles.container}>
         <Text style={styles.header}>Parcel Management System</Text>
         <table>
          
          <tr>
          <td>House No</td> 
            <td><TextInput style={styles.TextInput} onChangeText={(houseNo) => this.setState({houseNo})} placeholder='enter House No.'/></td>
          </tr>
      
      
          <tr> <td>
      
          </td>
            <td><View style={styles.button}>
                  <Button color="#1d2424" 
               title="Submit"
               onPress={() => this.analyze(this.state.date,this.state.houseNo) }/>
                   </View></td>
          </tr>
      
      
          <tr>
               <td>
                      Message
               </td>
              <td>   :{this.state.message}
              </td>
          </tr>

          <tr>
               <td>
                      Message
               </td>
              <td>   :{this.state.MainStorage[0][1][0]} {this.state.MainStorage[0][1][1]}
              </td>
          </tr>
          <tr>
               <td>
                      Message
               </td>
              <td>   :{this.state.MainStorage[2][1][0]} {this.state.MainStorage[2][1][1]}
              </td>
          </tr>
      
          <tr>
               <td>
                      Uncollected Parcel(House No):
               </td>
              <td>  {this.Analyze2()} {this.state.UncollectedParcelArray[0]},{this.state.UncollectedParcelArray[2]}
              </td>
          </tr>
      
      
          
          </table>
         </View>
          
         </View>
         ); 
         }
   }
  
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})