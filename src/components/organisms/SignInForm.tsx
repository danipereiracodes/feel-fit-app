import formVector from '../atoms/vectors/formVector.svg';
const SignInForm: React.FC = () => {
  return (
    <section className='signin'>
      <form className='signin__form'>
        <fieldset>
          <legend>Sign In</legend>
          <input
            type='text'
            className='signin__form__input'
            placeholder='Your Email'
          />
          <input
            type='text'
            className='signin__form__input'
            placeholder='Your Password'
          />
          <button type='submit' className='signin__form__button'>
            Sign In
          </button>

          <p>
            Don't have an account?
            <a href='/'>
              {' '}
              <span>register now</span>
            </a>
          </p>
        </fieldset>
      </form>
      <img
        src={formVector}
        alt='not relevant stlye vector'
        className='signin__form__vector'
      />
    </section>
  );
};

export default SignInForm;
