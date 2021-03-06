import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import {
  Box,
  Flex,
  useToast,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Button
} from "@chakra-ui/core";

import CustomSpinner from "../common/Spinner";
import WorkoutHistoryCard from "./WorkoutHistoryCard";
import {
  HistoryStyle,
  ModalFooter as StyledModalFooter,
  ModalContentArea
} from "./WorkoutHistoryStyle";
import { GET_COMPLETED_WORKOUTS } from "../../graphql/queries";
import { UPLOAD_PROGRESS_PICTURE } from "../../graphql/mutations";

function WorkoutHistory({ client, history }) {
  const toast = useToast();
  const [workouts, setWorkouts] = useState([]);
  const [uploadId, setUploadId] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        query: GET_COMPLETED_WORKOUTS
      })
      .then(res => {
        setWorkouts(res.data.completedWorkouts);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        alert(
          "An error occurred.",
          "Unable to load your completed workouts☹️.",
          "error"
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = e => {
    const file = e.target.files[0];
    setUploadFile(file);
  };

  const onOpenUpload = (id, e) => {
    setUploadId(id);
    onOpen(e);
  };

  const onUpload = e => {
    e.preventDefault();
    client
      .mutate({
        variables: {
          sessionId: uploadId,
          file: uploadFile
        },
        mutation: UPLOAD_PROGRESS_PICTURE
      })
      .then(res => {
        const { id, picture } = res.data.updateCompletedWorkout;
        setWorkouts(
          workouts.map(workout => {
            if (workout.id === id) return { ...workout, picture };
            return workout;
          })
        );
        alert("Progress picture uploaded successfully", "🚀", "success");
      })
      .catch(err =>
        alert(
          "An error occurred.",
          "Unable to upload your progress picture ☹️.",
          "error"
        )
      );
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
  } else if (workouts.length === 0) {
    return (
      <HistoryStyle>
        <header>
          <Heading size="lg" fontSize="50px">
            Your Workout History
          </Heading>
          <p>Check out all your completed workouts!</p>
          <p>You can upload progress pictures and track your development!</p>
        </header>
        <Heading as="h3">Sorry, you have no completed workouts</Heading>
      </HistoryStyle>
    );
  } else {
    return (
      <HistoryStyle>
        <header>
          <Heading>Your Workout History</Heading>
          <p>Check out all your completed workouts!</p>
          <p>You can upload progress pictures and track your development!</p>
        </header>

        <div className="content">
          {workouts.map(workout => (
            <WorkoutHistoryCard
              onOpen={e => onOpenUpload(workout.id, e)}
              key={workout.startDate}
              workout={workout}
              history={history}
            />
          ))}
        </div>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload your progress picture </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ModalContentArea>
                <input type="file" name="Uplad" onChange={onChange} />
              </ModalContentArea>
            </ModalBody>
            <ModalFooter>
              <StyledModalFooter>
                <Button variantColor="green" onClick={onUpload}>
                  Save
                </Button>
                <Button
                  variantColor="orange"
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </StyledModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </HistoryStyle>
    );
  }
}

export default withApollo(WorkoutHistory);
