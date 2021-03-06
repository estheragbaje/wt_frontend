import styled from "styled-components";

export const ExerciseListStyle = styled.div`
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ExercisesStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 0;

  @media only screen and (max-width: 500px) {
    width: 95vw;
  }

  h3 {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-weight: bolder;
    font-size: 1.2rem;
    padding: 0 2rem;
  }

  .search-container {
    border: 1px solid red;
    width: 70%;
    text-align: left;

    h4 {
      font-weight: bold;
    }

    p {
      color: grey;
      padding: 0.2rem 0;
    }
  }

  .load-more {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;

    button {
      background-color: #ff8744;
      color: white;
    }
  }
`;

export const ExerciseDetailStyle = styled.div`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 500px) {
    width: 95vw;
  }

  .exerciseCard-header {
    text-align: left;
    padding: 0.5rem 0;
    h2 {
      font-weight: bold;
      font-size: 4vw;
    }
    p {
      color: grey;
    }
  }

  .exerciseCard-banner {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 1rem 0;
    justify-content: center;
    img {
      width: auto;
    }
  }

  .exerciseCard-information {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;

    .exerciseCard-instruction {
      width: 55%;
      text-align: left;

      h3 {
        font-weight: bold;
        font-size: 1.5rem;
      }

      @media only screen and (max-width: 600px) {
        width: 90%;
      }
    }

    .exerciseCard-data {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      line-height: 3rem;
      .exerciseCard-data-tab {
        border-bottom: 1px solid black;
        display: flex;
        justify-content: space-between;
        text-align: left;

        .exerciseCard-data-value {
          font-weight: Bold;
          width: 67%;
        }
      }

      @media only screen and (max-width: 600px) {
        width: 90%;
        margin: 1rem 0;
      }
    }
  }

  .exercise-video {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 1rem 0;

    div {
      width: 100%;
    }
  }
`;

export const ExerciseStyle = styled.div`
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  justify-content: center;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.2);
    color: #ff8744;
  }

  @media only screen and (max-width: 1000px) {
    width: 45%;
  }

  @media only screen and (max-width: 800px) {
    width: 75%;
  }

  @media only screen and (max-width: 500px) {
    width: 95%;
  }

  img {
    width: 100%;
    height: 250px;
  }

  .exercise-detail {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.5rem;
    margin: 1rem 0;

    h4 {
      font-family: "Ubuntu";
    }

    .exercise-ratings {
      i {
        color: #ff8744;
        padding: 0 0.3rem;
      }
    }
  }

  .exercise-equipment {
    padding: 0 0.5rem;
    display: flex;
    p {
      background-color: #e5e5e5;
      padding: 0.4rem;
      border-radius: 5px;
      font-size: 0.7rem;
      margin-bottom: 1rem;
      font-family: "Roboto";
    }
  }
`;
