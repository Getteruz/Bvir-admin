import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import Head from "../../components/vacancy/get/Head";
import EventGet from "../../components/events/get/EventGet";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const EventsGet = () => {
  return (
    <Div>
      <Head />
      <EventGet />
    </Div>
  );
};

export default EventsGet;
