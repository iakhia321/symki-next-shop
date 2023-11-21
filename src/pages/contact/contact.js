import './contact.sass';

export default function Contact() {
    return (
        <div className='contact'>
            <div className='contact__slogan'>
                <h1>Get in Touch</h1>
            </div>
            <div className='contact__service'>
                <h2>Customer Service</h2>
                <div class="contact__service__wrap">
                    <h3 class="contact__service__wrap__col">Flahship Store</h3>
                    <h3 class="contact__service__wrap__col">Opening Hours</h3>
                    <h3 class="contact__service__wrap__col">Contact Us</h3>
                    <div class="contact__service__wrap__col">500 Terry Francine St.</div>
                    <div class="contact__service__wrap__col">Monday-Friday</div>
                    <div class="contact__service__wrap__col">1-800-000-0000</div>
                    <div class="contact__service__wrap__col">San Francisco, CA 94158</div>
                    <div class="contact__service__wrap__col">9:00am - 7:00pm EST</div>
                    <div class="contact__service__wrap__col">info@mysite.com</div>
                </div>
            </div>
            <div className='contact__Mail'>
                <h2>Inquiries</h2>
                <div className='contact__Mail__Inquiries'>
                    <p>For questions regarding our products and services you can also contact us by filling out the form below.</p>
                </div>
                <form className="contact__Mail__form">
                    <h2 className='contact__Mail__form_h2'>CONTACT US</h2>
                    <p className='contact__Mail__form__p_form' type="Name:"><input className='contact__Mail__form__inp_form' placeholder="Write your name here.." name='username' /></p>
                    <p className='contact__Mail__form__p_form' type="Email:"><input className='contact__Mail__form__inp_form' placeholder="Let us know how to contact you back.." name='email' /></p>
                    <p className='contact__Mail__form__p_form' type="Subject:"><input className='contact__Mail__form__inp_form' placeholder="Write the subject line.." name='subject' /></p>
                    <p className='contact__Mail__form__p_form' type="Message:"><input className='contact__Mail__form__inp_form' placeholder="What would you like to tell us.." name='message' /></p>
                    <button className='contact__Mail__form__btn_form' type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}