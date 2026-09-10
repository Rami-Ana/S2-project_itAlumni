// components/auth/RegisterForm.ts
export function renderRegisterForm(): string {
  return `
    <div class="register-form">
      <h1 class="register-form__title">Create Account</h1>

      <form class="register-form__form">
        <div class="register-form__field">
          <i class="fa-solid fa-user register-form__icon" aria-hidden="true"></i>
          <input type="text" id="registerName" placeholder="Your name is…" class="register-form__input">
        </div>

        <div class="register-form__field">
          <i class="fa-solid fa-user register-form__icon" aria-hidden="true"></i>
          <input type="text" id="registerSurname" placeholder="Your surname is …" class="register-form__input">
        </div>

        <div class="register-form__field">
          <i class="fa-solid fa-envelope register-form__icon" aria-hidden="true"></i>
          <input type="email" id="registerEmail" placeholder="Your email is…" class="register-form__input">
        </div>

        <div class="register-form__field">
          <i class="fa-solid fa-lock register-form__icon" aria-hidden="true"></i>
          <input type="password" id="registerPassword" placeholder="Create a password" class="register-form__input">
        </div>

        <button type="button" class="btn btn--gradient btn--l register-form__submit">Register</button>
      </form>
<hr>
 

      <div class="register-form__social">
        <button class="register-form__social-btn register-form__social-btn--apple">
          <i class="fa-brands fa-apple" aria-hidden="true"></i>
          Log in with Apple
        </button>

        <button class="register-form__social-btn register-form__social-btn--google">
          <i class="fa-brands fa-google" aria-hidden="true"></i>
          Log in with Google
        </button>

        <button class="register-form__social-btn register-form__social-btn--facebook">
          <i class="fa-brands fa-facebook" aria-hidden="true"></i>
          Log in with Facebook
        </button>
      </div>

      <p class="register-form__footer">Have you registered? <a href="#" class="register-form__login-link">Login</a>
      </p>
    </div>
  `;
}