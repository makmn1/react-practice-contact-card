import logo from './logo.svg';
import './App.css';
import './myStyles.css';
import ContactCardClass from "./components/ContactCardClass"

function App() {
  return (
    <div>
      <h1>Important Contacts</h1>
        <div className="card-container">
            
            <ContactCardClass 
                name="John Doe"
                mobileNumber="555-555-5500"
                workNumber="555-555-5501"
                email="contactcard1@createreactapp.com"
            />
            <ContactCardClass 
                name="Jane Doe"
                mobileNumber="555-555-5510"
                workNumber="555-555-5511"
                email="contactcard2@createreactapp.com"
            />
            <ContactCardClass 
                name="Actual Dough"
                mobileNumber="555-555-5520"
                email="contactcard3@createreactapp.com"
            />

        </div>
      
      <footer><small>&copy; 2022 Page Created &amp; Maintained by Mohamed Mohamed</small></footer>

    </div>
    
  );
}

export default App;
