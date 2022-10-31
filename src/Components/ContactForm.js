import "./FormStyle.css";
const ContactForm = () => {
  return (
    <div className="contact text-center">
        <h1 className="text-center fw-bolder mt-5 mb-3">Contact Us</h1>
            
                <form>
                    <div className="mb-3">
                        <input type="name" id="exampleInputName" aria-describedby="nameHelp" placeholder="name" />
                    </div>
                    <div className="mb-3">
                        <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
                    </div>
                    <div className="mb-3">
                        <input type="subject" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="subject"/>
                    </div>
                    
                    <div className="mb-3">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>

       </div>
  )   
}

export default ContactForm;