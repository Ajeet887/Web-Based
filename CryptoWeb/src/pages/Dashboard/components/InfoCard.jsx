import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

function InfoCard({ imgUrl,text,tagText,inverted }) {
  return (
    <CustomCard bgImg={imgUrl} bgColor={inverted ? "p.purple" : "white" }  bgSize="cover" bgRepeat="no-repeat">
      <Tag bgColor={inverted ? "white" : "p.purple" } color={inverted ? "p.purple" : "white" } borderRadius="full">
        {tagText}
      </Tag>
      <Text mt="4" textStyle="h5" color={inverted ? "white" : "black" }>{text}
      </Text>
    </CustomCard>
  );
}

export default InfoCard;
