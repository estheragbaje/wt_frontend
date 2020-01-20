import React, { useEffect, useState } from "react";
import { Box, Button, Flex, useToast } from "@chakra-ui/core";
import { withApollo } from "react-apollo";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { GET_WORKOUT_DETAILS } from "../../graphql/queries";
import CustomSpinner from "../common/Spinner";
import WorkoutCard from "./Workout";
import { WorkoutsStyle } from "./WorkoutStyle";

function Workouts({ client, workoutName }) {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  useEffect(() => {
    client
      .query({
        query: GET_WORKOUT_DETAILS
      })
      .then(res => {
        setData(res.data.workouts);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = () => {
    // const newLimit = limit + 3;
    // let limitExercises = exercises.slice(0, newLimit);
    // if (exerciseQuery === "TOP_RATED_EXERCISES") {
    //   limitExercises = limitExercises.sort(
    //     (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
    //   );
    // }
    // setLimitedExercises(limitExercises);
    // setLimit(newLimit);
  };

  if (isLoading) {
    return (
      <Box>
        <Flex
          width="100vw"
          height="100vh"
          justifyContent="center"
          align="center"
        >
          <CustomSpinner thickness="6px" size="xl" text="Loading..." />
        </Flex>
      </Box>
    );
  }

  if (error) {
    alert("An error occurred.", "Unable to load workouts", "error");
    return <Redirect to="/" />;
  }
  if (data.length > 0) {
    return (
      <WorkoutsStyle>
        <h3>{workoutName}</h3>
        {data.map(item => (
          <WorkoutCard key={item.id} data={item} />
        ))}

        <div className="load-more">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      </WorkoutsStyle>
    );
  }

  return (
    <Box>
      <Flex width="100vw" height="100vh" justifyContent="center" align="center">
        <CustomSpinner thickness="6px" size="xl" text="Loading..." />
      </Flex>
    </Box>
  );
}

export default withApollo(Workouts);

Workouts.propTypes = {
  client: PropTypes.object.isRequired
};
