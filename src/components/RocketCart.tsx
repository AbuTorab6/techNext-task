import { useContext } from "react";

import { Box, useMantineTheme, Text, Image } from "@mantine/core";
import { RocketContext } from "../context/RocketCartContext";
import moment from "moment";
const RocketCart = () => {
  const theme = useMantineTheme();
  const item = useContext(RocketContext);
  return (
    <>
      <Box
        //   key={index}
        sx={{
          border: "1px solid #CED4DA",
          borderRadius: theme.spacing["2"],
          padding: theme.spacing["8"],
        }}
      >
        <Image
          maw={124}
          mx="auto"
          radius="md"
          src={item?.links.mission_patch}
          alt="Rocket image"
        />
        <Text
          sx={{
            color: theme.colors.black[3],
            textAlign: "center",
            marginTop: theme.spacing["10"],
          }}
        >
          Launch Date:{" "}
          <span style={{ color: "#343A40" }}>
            {moment(item?.launch_date_local).format("DD MMM YYYY")}
          </span>
        </Text>
        <Text
          sx={{
            color: theme.colors.black[1],
            fontSize: theme.fontSizes["2xl"],
            fontWeight: 500,
            textAlign: "center",
            marginTop: theme.spacing["2"],
          }}
        >
          {item?.mission_name}
        </Text>
        <Text
          sx={{
            color: theme.colors.black[3],
            textAlign: "center",
            marginTop: theme.spacing["0.5"],
          }}
        >
          {item?.rocket.rocket_name}
        </Text>
        <Text
          sx={{
            color: theme.colors.black[3],
            fontWeight: 500,
            textAlign: "center",
            marginTop: theme.spacing["8"],
          }}
        >
          Launch Status:
        </Text>
        <Box
          mx="auto"
          maw="70px"
          px={theme.spacing["2"]}
          sx={{
            color: "white",
            fontSize: theme.fontSizes["xs"],
            fontWeight: 700,
            textAlign: "center",
            marginTop: theme.spacing["0.5"],
            backgroundColor:
              item?.launch_success == true ? "#198754" : "#DC3545",
            borderRadius: theme.spacing["0.5"],
          }}
        >
          {item?.launch_success == true ? "Success" : "failed"}
        </Box>
      </Box>
    </>
  );
};

export default RocketCart;
