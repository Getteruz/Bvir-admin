import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadPost from "../../components/events/post/HeadPost";
import EventPost from "../../components/events/post/EventPost";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const EventsPost = () => {
  return (
    <Div>
      <HeadPost />
      <EventPost />
    </Div>
  );
};

export default EventsPost;
