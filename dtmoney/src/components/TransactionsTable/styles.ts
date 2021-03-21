import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 4rem;

  table {
    width: 100%;
    border-radius: 0 0.5rem;

    th {
      color: var(--text-body);
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      font-weight: 600;
    }

    tr {
      border-bottom: 0.3rem solid var(--background);
    }

    td {
      padding: 1rem 2rem;
      border: 0.5rem;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;