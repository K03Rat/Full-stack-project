// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import './app.css'

import NxWelcome from './nx-welcome';
import VerticalContainer from "../vertical-container/VerticalContainer";
export function App() {
  return (
     <div className = "main-component">
         <div>
             <VerticalContainer>{
                 <div>
                     <h2>Create </h2>
                 </div>
             }</VerticalContainer>
             <VerticalContainer>{
                 <div>
                     <h2>Get </h2>
                 </div>
             }</VerticalContainer>
             <VerticalContainer>{
                 <div>
                     <h2>Update </h2>
                 </div>
             }</VerticalContainer>
             <VerticalContainer>{
                 <div>
                     <h2>Delete </h2>
                 </div>
             }</VerticalContainer>
         </div>
     </div>

  );
}

export default App;
