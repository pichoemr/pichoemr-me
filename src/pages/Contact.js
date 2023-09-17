import '../assets/styles/Contact.css';



function Contact() {
    return (
        <div className="Contact">
            <form>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="jonhdoe@email.com"></input>
                <label for="firstname">First Name</label>
                <input type="firstname" id="firstname" name="firstname" placeholder="John"></input>
                <label for="lastname">Last Name</label>
                <input type="lastname" id="lastname" name="lastname" placeholder="Doe"></input>
                <label for="message">Message</label>
                <input type="message" id="message" name="message"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Contact;
