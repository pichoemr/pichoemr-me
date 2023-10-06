import '../assets/styles/Contact.css';



function Contact() {
    return (
        <div className="Contact">
            <h3>You can contact me by email or used the contact form</h3>
            <p>emric.pichonnier@pixicode.dev</p>
            <form>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="jonhdoe@email.com" required></input>
                <label for="firstname">First Name</label>
                <input type="firstname" id="firstname" name="firstname" placeholder="John"></input>
                <label for="lastname">Last Name</label>
                <input type="lastname" id="lastname" name="lastname" placeholder="Doe"></input>
                <label for="message">Message</label>
                <textarea rows="5" cols="60" id='message' name="message" placeholder="Enter message" required></textarea>
                <input id='submit' type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Contact;
