import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="content">
          <p>
            To Join our organization, enter your email here to receive the
            necessary information to register
          </p>
        </div>
        <div>
          <form
            action="https://formspree.io/f/mzbqaggr"
            method="POST"
            className="contact-form"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter-email"
              name="email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    margin-top: 2rem;
    width: 80vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    height: 2rem;
    font-size: 1rem;
    padding: 0.1rem 2rem;
    border: 2px solid var(--primary-500);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--primary-400);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
    padding-bottom: 1rem;
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .section-center {
      margin-right: 2rem;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: right;
      gap: 3rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
