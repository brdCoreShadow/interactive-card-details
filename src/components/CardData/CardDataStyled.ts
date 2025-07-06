import styled from "@emotion/styled";

type Props = {
  isError: boolean;
};

export const CardDataCon = styled.div`
  padding-top: 90px;
  padding-bottom: 44px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 1280px) {
    width: 25%;

    margin-right: 200px;
  }
`;

export const HolderCon = styled.div<Props>`
  position: relative;

  margin-bottom: 20px;

  text-transform: uppercase;

  @media (min-width: 1280px) {
    margin-bottom: 26px;
  }

  & span {
    display: inline-block;

    margin-bottom: 8px;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;

    color: #21092f;
  }

  & input {
    width: 100%;

    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;

    font-size: 18px;
    font-weight: 500;

    color: #21092f;

    border: ${({ isError }) =>
      isError ? "1px solid #FF0000" : "1px solid #dfdee0"};

    border-radius: 8px;

    &::placeholder {
      color: #dfdee0;
    }

    @media (min-width: 1280px) {
      &:hover,
      &:focus,
      &:active {
        cursor: pointer;
      }
    }
  }
`;

export const CardNumberCon = styled.div<Props>`
  position: relative;

  margin-bottom: 20px;

  text-transform: uppercase;

  @media (min-width: 1280px) {
    margin-bottom: 26px;
  }

  & span {
    display: inline-block;

    margin-bottom: 8px;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;

    color: #21092f;
  }

  & input {
    width: 100%;

    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;

    font-size: 18px;
    font-weight: 500;

    color: #21092f;

    border: ${({ isError }) =>
      isError ? "1px solid #FF0000" : "1px solid #dfdee0"};

    border-radius: 8px;

    &::placeholder {
      color: #dfdee0;
    }

    @media (min-width: 1280px) {
      &:hover,
      &:focus,
      &:active {
        cursor: pointer;
      }
    }
  }
`;

export const CardDataConFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 36px;
`;

export const MonthYearCon = styled.div<Props>`
  position: relative;

  & span {
    display: inline-block;

    margin-bottom: 8px;

    text-transform: uppercase;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;

    color: #21092f;
  }

  &:not(:last-of-type) {
    margin-right: 8px;
  }

  & input {
    width: 72px;

    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;

    font-size: 18px;
    font-weight: 500;

    color: #21092f;

    border: ${({ isError }) =>
      isError ? "1px solid #FF0000" : "1px solid #dfdee0"};
    border-radius: 8px;

    &::placeholder {
      color: #dfdee0;
    }

    @media (min-width: 1280px) {
      width: 80px;

      &:hover,
      &:focus,
      &:active {
        cursor: pointer;
      }
    }
  }
`;

export const CVCCon = styled.div<Props>`
  position: relative;

  & span {
    display: inline-block;

    margin-bottom: 8px;

    text-transform: uppercase;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;

    color: #21092f;
  }

  &:not(:last-of-type) {
    margin-right: 8px;
  }

  & input {
    max-width: 164px;

    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;

    font-size: 18px;
    font-weight: 500;

    color: #21092f;

    border: ${({ isError }) =>
      isError ? "1px solid #FF0000" : "1px solid #dfdee0"};
    border-radius: 8px;

    &::placeholder {
      color: #dfdee0;
    }

    @media (min-width: 1280px) {
      width: 100px;

      &:hover,
      &:focus,
      &:active {
        cursor: pointer;
      }
    }
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;

  font-size: 18px;
  font-weight: 500;

  background-color: #21092f;
  color: #fff;

  border-radius: 8px;

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
  }
`;

export const ErrorCon = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;

  transform: translate(16%, 100%);

  text-transform: lowercase;

  font-size: 12px;
  font-weight: 600;
  font-style: italic;

  color: #ff0000;
`;
