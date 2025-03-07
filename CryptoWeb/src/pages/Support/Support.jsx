import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";


function Support() {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="80px">
      <SupportCard
        leftComponent={<ContactCard />}
        title="Contact Us"
        icon={IoMdMail}
        text="Have a question or just want to know more? Feel free to reach out to
          us."
      />
      <SupportCard
        leftComponent={<InfoCard imgUrl="/grid_bg.svg" inverted={true} bgcolor="purple" text="Learn more about our real estate, mortgage, and  corporate account services" tagText="Contact"/>}
        title="Live Chat"
        icon={BiSolidMessageRounded}
        text="Don’t have time to wait for the answer? Chat with us now."
      />
      </Stack>
    </DashboardLayout>
  );
}

export default Support;
