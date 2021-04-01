/**
 * a symptom entry following {@link Symptom}
 */
 import React from 'react';
import {Symptom } from '../../models/Symptom';

 class SymptomEntry extends React.Component {
 
  componentDidMount(){
   this.setState({ title: 'New Symptom' });
  }
 
  render() {
   return (
    <div>
     <article>Uhhhhhh</article>  
    </div>
   );
  }
 }
 
 export default SymptomEntry;