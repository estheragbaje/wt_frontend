import styled from "styled-components";

const DashboardStyle = styled.div`
  width: 95vw;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  padding: 2rem;

  .welcome {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    h2 {
      font-size: 1.8rem;

      @media only screen and (max-width: 800px) {
        font-size: 1.5rem;
      }
    }
  }

  .dashboard-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;

    @media only screen and (max-width: 1085px) {
      flex-direction: column-reverse;
      align-items: center;
    }

    .user-detail {
      width: 30%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      border-radius: 10px;
      padding: 0.5rem;
      border: 2px solid grey;
      position: relative;

      @media only screen and (max-width: 1085px) {
        width: 70%;
        margin: 1rem 0;
      }
      @media only screen and (max-width: 900px) {
        width: 100%;
        margin: 1rem 0;
      }

      a {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
      }
    }

    .dasboard-detail {
      width: 65%;
      display: flex;
      flex-wrap: wrap;

      @media only screen and (max-width: 1085px) {
        width: 90%;
      }

      @media only screen and (max-width: 900px) {
        width: 100%;
        margin: 1rem 0;
      }

      .goal {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        p {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          color: #ff8744;
          font-family: Ubuntu;
          font-style: normal;
          font-weight: normal;
        }

        h4 {
          width: 100%;
          padding-left: 7rem;
          font-family: Ubuntu;
          font-style: normal;
          font-weight: normal;
          margin: 0.5rem 0;
          font-size: 2rem;
        }
      }

      h4 {
        width: 100%;
        padding-left: 1rem;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        margin: 0.5rem 0;
        font-size: 2rem;
      }

      .recomended-workouts {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        p {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          color: #ff8744;
          font-family: Ubuntu;
          margin: 1rem 0;
        }
      }
    }
  }

  .profile-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;

    .quotes {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .goal {
      width: 100%;
      height: 335px;
      overflow: hidden;

      @media screen and (max-width: 700px) {
        height: 300px;
      }
    }
  }

  .workout-history {
    width: 95%;
    min-height: 250px;
    max-height: 280px;
    overflow: hidden;
    margin: 1rem auto;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
    border-radius: 10px;

    @media screen and (max-width: 700px) {
      margin: auto;
      margin-top: 0;
      min-height: 200px;
      max-height: 245px;
    }

    .workout-history-content {
      width: 100%;
      display: flex;
      padding: 1rem 2rem;
      justify-content: space-between;

      @media screen and (max-width: 700px) {
        padding: 0.8rem 0.5rem;
      }
    }
  }

  #profile-workout-history-name {
    p {
      color: black;
      width: 70%;
      text-align: left;
    }

    .link {
      color: #ff8744;
      width: 100%;
    }

    a {
      width: 25%;

      @media screen and (max-width: 700px) {
        width: 30%;
      }
    }
  }

  /* .colorOrange {
    color: orange;
  }

  .alignText {
    text-align: left;
  }

  .pointer {
    cursor: pointer;
    background-color: black;
    color: white;

    &:hover {
      background-color: #8884d8;
      color: black;
    }
  }

  .slide {
    -webkit-animation-name: slide;
    -webkit-animation-duration: 1.5s;
    animation-name: slide;
    animation-duration: 1.5s;
  }

  .mySlides {
    display: none;

    section {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0px;
    }
  }

  > div {
    display: flex;


    a {
      margin-left: 90%;
    }

    > div {
      section {
        margin-bottom: 30px;
      }

      section:first-child {
        p {

          width: 100%;
        }
      }
    }
  } */
`;

export default DashboardStyle;
