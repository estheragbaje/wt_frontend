import styled from "styled-components";

export const WorkoutsStyleList = styled.div`
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const WorkoutsStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2rem 0;

  h3 {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-weight: bolder;
    font-size: 1.2rem;
    padding: 0 2rem;
  }

  .load-more {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 0;

    button {
      background-color: #ff8744;
      color: white;
    }
  }
`;

export const WorkoutStyle = styled.div`
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.2);
    color: #ff8744;
  }

  @media only screen and (max-width: 1065px) {
    width: 40%;
  }

  @media only screen and (max-width: 800px) {
    width: 45%;
  }

  @media only screen and (max-width: 710px) {
    width: 65%;
  }

  img {
    width: 100%;
    height: 250px;
  }

  .workout-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.5rem;
    margin: 1rem 0;

    h2 {
      margin: 1rem 0;
      width: 100%;
      font-family: "Ubuntu";
    }

    .workout-type {
      p {
        font-family: "Roboto";
        display: flex;
        margin: 0.5rem 0;
        width: 100%;
      }
    }
  }
`;

export const WorkoutDetailStyle = styled.div`
  min-height: 100vh;
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 400px) {
    width: 97vw;
  }

  .workout {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 800px) {
      flex-direction: column;
    }

    .workout-detail {
      width: 45%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;

      @media only screen and (max-width: 800px) {
        width: 75%;
      }

      @media only screen and (max-width: 550px) {
        width: 95%;
      }

      @media only screen and (max-width: 400px) {
        width: 100%;
      }
    }

    .workout-image {
      width: 45%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      @media only screen and (max-width: 800px) {
        width: 75%;
      }

      @media only screen and (max-width: 550px) {
        width: 95%;
      }

      @media only screen and (max-width: 400px) {
        width: 100%;
      }

      img {
        height: 400px;
      }
    }
  }

  .exercise {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    .exercise-detail {
      width: 45%;

      @media only screen and (max-width: 800px) {
        width: 95%;
      }
    }

    .exercise-video {
      width: 45%;

      div {
        width: 100%;
      }

      @media only screen and (max-width: 800px) {
        width: 95%;
      }
    }
  }

  .exercise-preview {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: 400px) {
      flex-direction: column;
    }

    img {
      width: 150px;
      height: 100px;
    }

    .exercise-preview-detail {
      padding: 1rem;
    }
  }
`;
