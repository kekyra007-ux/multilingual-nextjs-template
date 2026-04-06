import styled from "styled-components";

const StyledHeading = styled.h2`
  color: ${({ theme }) =>
    theme?.colors?.primary || "#facc15"}; /* fallback: золотой */
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  font-size: ${({ level, theme }) => {
    const size = theme?.font?.size;
    switch (level) {
      case 1:
        return size?.xxl || "3.5rem";
      case 2:
        return size?.xl || "3rem";
      case 3:
        return size?.lg || "2.5rem";
      default:
        return size?.base || "2rem";
    }
  }};

  @media (max-width: 1024px) {
    font-size: ${({ level, theme }) => {
      const size = theme?.font?.size;
      switch (level) {
        case 1:
          return size?.xl || "2rem";
        case 2:
          return size?.lg || "1.5rem";
        case 3:
          return size?.base || "1.25rem";
        default:
          return size?.base || "1.25rem";
      }
    }};
  }

  @media (max-width: 640px) {
    font-size: ${({ level, theme }) => {
      const size = theme?.font?.size;
      switch (level) {
        case 1:
          return size?.lg || "1.5rem";
        case 2:
          return size?.base || "1.25rem";
        case 3:
          return size?.sm || "1rem";
        default:
          return size?.sm || "1rem";
      }
    }};
  }
`;

const Heading = ({ level = 1, children }) => {
  const Tag = `h${level}`;
  return (
    <StyledHeading as={Tag} level={level}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
