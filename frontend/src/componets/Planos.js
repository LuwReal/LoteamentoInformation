import React from 'react';
import styled from 'styled-components';

const Card = ({tipoDePlano, price, menber, adiquirPlano}) => {
  return (
    <StyledWrapper>
      <div className="plan">
        <div className="inner">
          <span className="pricing">
            <span>
              {price} <small>/ m</small>
            </span>
          </span>
          <p className="title">{tipoDePlano}</p>
          <p className="info">This plan is for those who have a team already and running a large business.</p>
          <ul className="features">
            <li>
              <span className="icon">
                <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </span>
              <span><strong>{menber}</strong> team members</span>
            </li>
            <li>
              <span className="icon">
                <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </span>
              <span>Plan <strong>team meetings</strong></span>
            </li>
            <li>
              <span className="icon">
                <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </span>
              <span>File sharing</span>
            </li>
          </ul>
          <div className="action">
            {adiquirPlano}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .plan {
    border-radius: 16px;
    box-shadow: 0 30px 30px -25px rgba(0, 38, 255, 0.205);
    padding: 10px;
    background-color: #fff;
    color: #2f3cb0;
    max-width: 300px;
  }

  .plan strong {
    font-weight: 600;
    color: #425275;
  }

  .plan .inner {
    align-items: center;
    padding: 20px;
    padding-top: 40px;
    background-color: #ccd7ff;
    border-radius: 12px;
    position: relative;
  }

  .plan .pricing {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #a4b5ff;
    border-radius: 99em 0 0 99em;
    display: flex;
    align-items: center;
    padding: 0.625em 0.75em;
    font-size: 1.25rem;
    font-weight: 600;
    color: #425475;
  }

  .plan .pricing small {
    color: #707a91;
    font-size: 0.75em;
    margin-left: 0.25em;
  }

  .plan .title {
    font-weight: 600;
    font-size: 1.25rem;
    color: #425675;
  }

  .plan .title + * {
    margin-top: 0.75rem;
  }

  .plan .info + * {
    margin-top: 1rem;
  }

  .plan .features {
    display: flex;
    flex-direction: column;
  }

  .plan .features li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .plan .features li + * {
    margin-top: 0.75rem;
  }

  .plan .features .icon {
    background-color: #1FCAC5;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  .plan .features .icon svg {
    width: 14px;
    height: 14px;
  }

  .plan .features + * {
    margin-top: 1.25rem;
  }

  .plan .action {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .plan .button {
    background-color:rgb(0, 15, 149);
    border-radius: 6px;
    color: #fff;
    font-weight: 500;
    font-size: 1.125rem;
    text-align: center;
    border: 0;
    outline: 0;
    width: 100%;
    padding: 0.625em 0.75em;
    text-decoration: none;
  }

  .plan .button:hover, .plan .button:focus {
    background-color: #000c7a;
  }`;

export default Card;
