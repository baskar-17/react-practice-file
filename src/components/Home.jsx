import React from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";

import { useDisclosure } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <div className={style.container}>
      <div>
        <Card align="center">
          <CardHeader>
            <Heading size="md"> You haven't created any post</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Start create a post to interact with multiple peoples and get
              notices in the community.
            </Text>
          </CardBody>
          <CardFooter>
            <>
              <Button onClick={onOpen} colorScheme="blue" variant="outline">
                {<BiPlus />} Create New Post
              </Button>
              <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
              >
                <AlertDialogOverlay />

                <AlertDialogContent>
                  <AlertDialogHeader>
                    You are not Logged in yet
                  </AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    Please create an account first before creating post.
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Link to={"/login"}>
                      <Button
                        colorScheme="blue"
                        variant="outline"
                        ref={cancelRef}
                        onClick={onClose}
                      >
                        Login
                      </Button>
                    </Link>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Home;
