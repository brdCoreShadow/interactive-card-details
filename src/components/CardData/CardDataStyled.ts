import styled from "@emotion/styled";

export const CardDataCon = styled.div`
  padding-top: 90px;
  padding-bottom: 44px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const HolderCon = styled.div`
  margin-bottom: 20px;

  text-transform: uppercase;

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

    border: 1px solid #dfdee0;

    border-radius: 8px;

    &::placeholder {
      color: #dfdee0;
    }
  }
`;

export const CardNumberCon = styled.div`
  margin-bottom: 20px;

  text-transform: uppercase;

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

    border: 1px solid #dfdee0;

    border-radius: 8px;

    &::placeholder {
      color: #dfdee0;
    }
  }
`;

export const CardDataConFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 28px;
`;

export const MonthYearCon = styled.div`
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

    border: 1px solid #dfdee0;
    border-radius: 8px;

    &::placeholder {
      color: #dfdee0;
    }
  }
`;

export const CVCCon = styled.div`
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

    border: 1px solid #dfdee0;
    border-radius: 8px;

    &::placeholder {
      color: #dfdee0;
    }
  }
`;

export const SubmitBtn = styled.button`
width: 100%;

padding-top: 16px;
padding-bottom: 16px;

font-size: 18px;
font-weight: 500;

background-color: #21092F;
color: #fff;

border-radius: 8px;
`
