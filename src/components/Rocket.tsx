import {
  Box,
  Container,
  Title,
  useMantineTheme,
  Text,
  Flex,
  Button,
  Checkbox,
  TextInput,
  Select,
  Group,
  SimpleGrid,
  Image,
  Pagination,
} from "@mantine/core";
import React, { useRef, useState } from "react";

import moment from "moment";

import { useGetRocket } from "../dataAccess/useGetRocket";
import { IconSearch } from "../icons/IconSearch";

const RocketPage = () => {
  const theme = useMantineTheme();

  const [byStatus, setByStatus] = useState<string | null>(null);
  const [byDate, setByDate] = useState<string | null>(null);
  const [byName, setByName] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [activePage, setPage] = useState(1);

  const name = useRef<HTMLInputElement>(null);

  const { data } = useGetRocket({});

  const filter = data?.filter((item) => {
    const statusMap: { [key: string]: boolean } = { true: true, false: false };
    if (byStatus !== null) {
      if (item.launch_success === statusMap[byStatus]) {
        return true;
      } else {
        return false;
      }
    } else if (byName !== null) {
      if (item.mission_name === byName) {
        return true;
      } else if (byName.length == 0) {
        return true;
      }
    } else if (byDate === "week") {
      const last7DayStart = moment().startOf("day").subtract(1, "week");
      const yesterdayEndOfRange = moment().endOf("day").subtract(1, "day");
      return moment(item.launch_date_utc).isBetween(
        last7DayStart,
        yesterdayEndOfRange
      );
    } else if (byDate === "month") {
      const last7DayStart = moment().startOf("day").subtract(1, "month");
      const yesterdayEndOfRange = moment().endOf("day").subtract(1, "month");
      return moment(item.launch_date_utc).isBetween(
        last7DayStart,
        yesterdayEndOfRange
      );
    } else if (byDate === "year") {
      const last7DayStart = moment().startOf("day").subtract(4, "year");
      const yesterdayEndOfRange = moment().endOf("day").subtract(1, "year");
      return moment(item.launch_date_utc).isBetween(
        last7DayStart,
        yesterdayEndOfRange
      );
    } else if (checked === true) {
      return item.upcoming === true;
    } else {
      return true;
    }
  });

  const itemPerPage = 9;
  const totalPages = Math.ceil((filter?.length as number) / itemPerPage);
  const start = (activePage - 1) * itemPerPage;
  const end = start + itemPerPage;
  const currentData = filter?.slice(start, end);

  const searchByName = () => {
    if (name.current !== null) {
      setByName(name.current?.value);
    }
  };

  console.log("filter", filter);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          paddingTop: theme.spacing["24"],
          paddingBottom: theme.spacing["28"],
          [theme.fn.smallerThan("md")]: {
            paddingLeft: theme.spacing["5"],
            paddingRight: theme.spacing["5"],
          },
        }}
      >
        <Container size={1320}>
          <Title
            ta="center"
            fz={theme.fontSizes["4xl"]}
            sx={{
              color: theme.colors.black[0],
              fontWeight: 500,
              [theme.fn.smallerThan("sm")]: {
                fontSize: theme.fontSizes["4xl"],
                color: theme.colors.blue[5],
                fontWeight: 700,
              },
            }}
          >
            Spaceflight details
          </Title>
          <Text
            sx={{
              color: theme.colors.black[1],
              fontSize: theme.fontSizes["md"],
              fontWeight: 400,
              textAlign: "center",
              marginTop: theme.spacing["2"],
            }}
          >
            Find out the elaborate features of all the past big spaceflights.
          </Text>
          <Flex
            mih={50}
            gap="md"
            justify="flex-end"
            align="center"
            direction="row"
            wrap="wrap"
            sx={{ marginTop: theme.spacing["16"] }}
          >
            <Checkbox
              checked={checked}
              onChange={(event) => {
                setChecked(event.currentTarget.checked);
                setByDate(null);
                setByStatus(null);
                setByName(null);
              }}
              label="Show upcoming only"
            />
          </Flex>
          <Flex
            gap="md"
            justify="space-between"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Group
              sx={{
                border: "0.5px solid #CED4DA",
                borderRadius: theme.spacing["0.5"],
              }}
              spacing="0px"
            >
              <TextInput
                styles={{
                  input: {
                    border: theme.spacing["0"],
                  },
                }}
                size="sm"
                placeholder="Search . . ."
                ref={name}
                onChange={(event) => {
                  setByName(event.target.value);
                  setByStatus(null);
                  setByDate(null);
                  setChecked(false);
                }}
                // onChange={(event) => {
                //   setByName(event.currentTarget.value);
                // }}
              />
              <Button
                styles={{
                  root: {
                    borderRadius: theme.spacing["0"],
                  },
                }}
                size="sm"
                onClick={searchByName}
              >
                <IconSearch />
              </Button>
            </Group>
            <Group>
              <Select
                placeholder="By Launch Status"
                value={byStatus}
                onChange={(value) => {
                  setByStatus(value);
                  setByDate(null);
                  setChecked(false);
                  setByName(null);
                }}
                data={[
                  { value: "false", label: "Failure" },
                  { value: "true", label: "success" },
                ]}
              />
              <Select
                placeholder="By Launch Date"
                value={byDate}
                onChange={(value) => {
                  setByDate(value);
                  setByStatus(null);
                  setChecked(false);
                  setByName(null);
                }}
                data={[
                  { value: "week", label: "Last Week" },
                  { value: "month", label: "Last Month" },
                  { value: "year", label: "Last Year" },
                ]}
              />
            </Group>
          </Flex>
          <SimpleGrid mt={theme.spacing["16"]} cols={3}>
            {currentData?.map((item, index) => {
              return (
                <Box
                  key={index}
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
                    src={item.links.mission_patch}
                    alt="Random image"
                  />
                  <Text
                    sx={{
                      color: theme.colors.black[3],
                      fontSize: theme.fontSizes["md"],
                      fontWeight: 400,
                      textAlign: "center",
                      marginTop: theme.spacing["10"],
                    }}
                  >
                    Launch Date:{" "}
                    {moment(item.launch_date_local).format("DD MMM YYYY")}
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
                    {item.mission_name}
                  </Text>
                  <Text
                    sx={{
                      color: theme.colors.black[3],
                      fontSize: theme.fontSizes["md"],
                      fontWeight: 400,
                      textAlign: "center",
                      marginTop: theme.spacing["0.5"],
                    }}
                  >
                    {item.rocket.rocket_name}
                  </Text>
                  <Text
                    sx={{
                      color: theme.colors.black[3],
                      fontSize: theme.fontSizes["md"],
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
                        item.launch_success == true ? "#198754" : "#DC3545",
                      borderRadius: theme.spacing["0.5"],
                    }}
                  >
                    {item.launch_success == true ? "Success" : "failed"}
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
          <Group
            sx={{
              marginTop: theme.spacing["12"],
            }}
            position="center"
          >
            <Pagination
              color="blue"
              value={activePage}
              onChange={setPage}
              total={totalPages}
            />
          </Group>
        </Container>
      </Box>
    </>
  );
};

export default RocketPage;
