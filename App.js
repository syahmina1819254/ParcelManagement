import React, { useState, useEffect, Component } from 'react'
import { StyleSheet, Text,TextInput,SafeAreaView,View,Button} from 'react-native';
import Moment from 'moment';


class Inputs extends Component {
constructor(){
   super(); 
   this.state = {
      //first element is house no second element is date
    date2: Moment().format('DD-MM-YY'),
    word:[
      [  ['24','09-08-18'],['25','09-09-18'],['26','09-08-18'],['27','09-10-18'],['28','09-08-18']
      ],
      [  ['29','09-08-18'],['30','09-08-18'],['40','12-08-18'],['50','10-08-18'],['60','09-08-18']
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
      date:'',
      houseNo:'',
      message:'',
      arr: [ //incomplete array initialization
        [  [0],[0],[0],[0],[0]  
        ],
        [  [0],[0],[0],[0],[0] 
        ],
        [  [0],[0],[0],[0],[0]
        ],
        [  [0],[0],[0],[0],[0]
        ],
        [  [0],[0],[0],[0],[0]
        ],
        [  [0],[0],[0],[0],[0]
        ],
        [  [0],[0],[0],[0],[0]
        ]]
       
    
   }}


   analyzeDate(word,date,houseno, arr, date2) { //fx compare duration current & parcel date. then puts duration inside a 2d array
       
    this.state.arr[0][0] = 1; //bayangkan kat sini ada fx yg boleh add values to arr. 
    this.setState({ arr: [0][0] })


   }

   analyze(date,houseno) {
     var flag='false';
      var data='false';

      //check if the data exist
     for (let i = 0; i < this.state.word.length; i++){

      for (let j = 0; j < this.state.word[i].length; j++)
      {
         for (let z = 0; z <this.state.word[i][j].length; z++){
            if(this.state.word[i][j][0]==houseno && this.state.word[i][j][1]==date)
            {
               var data='true';
            }
         }

      }
     }
      //store data in the array
     for (let i = 0; i < this.state.word.length; i++) {
      for (let j = 0; j < this.state.word[i].length; j++)
      {
         for (let z = 0; z <this.state.word[i][j].length; z++) {
   
            if(flag=='false' && data=='false')
            {
               if(this.state.word[i][j][0]=='0' && this.state.word[i][j][1]=='0')
                  {
   
                     this.state.word[i][j][0]=houseno;
                     this.state.word[i][j][1]=date;
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
          
      this.setState({ date: '' });
      this.setState({ houseno: '' })




      }
      render() {
        const { date2 } = this.state;

     
         return (
          <View style={styles.container}>
         <View style={styles.container}>
         <Text style={styles.header}>A Word Analyzer</Text>
         <table>
          <tr>
          <td>date</td> 
            <td><TextInput style={styles.TextInput} onChangeText={(date) => this.setState({date})} placeholder='enter word'/></td>
          </tr>
          <tr>
          <td>House No</td> 
            <td><TextInput style={styles.TextInput} onChangeText={(houseNo) => this.setState({houseNo})} placeholder='enter word'/></td>
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
              <td>   :{this.state.word[2][0][0]} {this.state.word[2][0][1]}
              </td>
          </tr>
          <tr>
               <td>
                      Message
               </td>
              <td>   :{this.state.word[2][1][0]} {this.state.word[2][1][1]}
              </td>
          </tr>

          <td><td><View style={styles.button}>
                  <Button color="#1d2424" 
               title="Analyze dates"
               onPress={() => this.analyzeDate(this.state.arr) }/> //call fx analyzeDate
                   </View></td></td>
      
            <p>{this.state.arr[0][0]}</p> //testing output, dont keep this
          


          <div class="date2">
        <p> {this.state.date2}</p>
      </div>

      

          
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