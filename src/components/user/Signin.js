import React from "react";
import * as Yup from "yup";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Spacer,
  Center,
  Link,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import { StyledSignin } from "./StyledSignin";

export function Signin() {
  const formElements = [
    { el: "email", enter: "Enter email", id: 1 },
    { el: "password", enter: "Enter password", id: 2 },
  ];

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const SignupSchema = Yup.object().shape({
    password: Yup.string().min(7, "Too Short!").max(50, "Too Long!").required("This field is required"),
    email: Yup.string().email("Email format is invalid").required("This field is required"),
  });

  return (
    <StyledSignin>
      <Flex minH="100vh" align="center" justify="center">
        <Box w={[300, 350, 400]} rounded="3xl" bg="white" boxShadow="lg" p={8}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              console.log("email: ", values.email);
              console.log("password: ", values.password);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
            // enableReinitialize
          >
            {(props) => (
              <Form>
                <Center pb={6}>
                  <Heading as="h3" size="lg">
                    Sign In
                  </Heading>
                </Center>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email} height="120px">
                      <FormLabel pl={2} htmlFor="email">
                        EMAIL
                      </FormLabel>
                      <Input
                        size="lg"
                        {...field}
                        id="email"
                        placeholder={"Enter email"}
                        focusBorderColor="green.900"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password} height="120px">
                      <FormLabel pl={2} htmlFor="password">
                        PASSWORD
                      </FormLabel>
                      <InputGroup size="lg">
                        <Input
                          size="lg"
                          {...field}
                          id="password"
                          type={show ? "text" : "password"}
                          placeholder={"Enter password"}
                          focusBorderColor="green.900"
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="xs" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>

                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                {/* <Field name="password" as={InputField} /> */}

                <Text fontSize="sm" pb={5}>
                  Need an account?
                  <Link color="green.900" href="#" p={1}>
                    Register!
                  </Link>
                </Text>

                <Flex>
                  <Spacer />
                  <Box p="1">
                    <Button
                      type="submit"
                      bg="green.900"
                      color="white.50"
                      borderRadius="3xl"
                      isLoading={props.isSubmitting}
                    >
                      Sign in
                    </Button>{" "}
                  </Box>
                </Flex>
              </Form>
            )}
          </Formik>

          {/*
   <BaseFormikSetValues/> */}
        </Box>
      </Flex>
    </StyledSignin>
  );
}
