function Contact() {
  return (
    <div className='form'>
      <div className='formContainer'>
        <div className='growTogetherContainer'>
          <h1 className='growTogether'>LET&apos;S GROW TOGETHER</h1>
        </div>
        <div className='formContainer'>
          <form>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Email' />
            <textarea placeholder='Message' />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
