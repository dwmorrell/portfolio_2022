import "./FormStyles.css";
//import ErrorAlert from "../error/ErrorAlert.js";
import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const Form = () => {

  const navigate = useNavigate();
 // const[error, setError] = useState(null);
  const [information, setInformation] = useState({
        from_name: "",
        to_name: "Davis Morrell",
        reply_to: "",
      });

  const handleChange = (e) => {
    setInformation({
        ...information, [e.target.name]: e.target.value
      });
  };

  const handleSubmit = async function (event) {
		event.preventDefault();
    await send(
          'service_uhh49sl',
          'template_2wdkvxj',
          information,
          '7cdh1gjh31qhVnpYI'
        )
      .then((response) => {
        console.log("Success!", response.status, response.text);
        navigate('/projects');
      })
      .catch((error) => {
          console.log("Failed...", error)
      })
	};

  // function validateFields() {

  //   let foundErrors = [];

  //   for (const field in information) {
  //     if (information[field] === "") {
  //       foundErrors.push({
  //         message: `${field.split("_").join(" ")} cannot be left blank.`,
  //       });
  //     }
  //   }
  //   setError(foundErrors);
  //   return foundErrors.length === 0;
  // }

  return (
    
    <div className="form">
      {/*<ErrorAlert error={error} />*/}
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input 
              type="text" 
              name="from_name"
              onChange={handleChange}
              value={information.from_name}
            />
            <label>Email</label>
            <input 
              type="email" 
              name="reply_to"
              onChange={handleChange}
              value={information.reply_to} 
            />
            <label>Message</label>
            <textarea 
              rows="6" 
              name="message"
              placeholder="Type your message here" 
              onChange={handleChange}
              value={information.message}            
              
            />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form