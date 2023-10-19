import axios from "axios";

import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export type Rocket = {
  mission_name: string;
  launch_success: boolean;
  launch_year: string;
  launch_date_local: string;
  launch_date_utc: string;
  upcoming: boolean;
  links: {
    mission_patch: string;
    mission_patch_small: string;
  };
  rocket: {
    rocket_name: string;
  };
};

type UseRocketOptions = {
  config?: UseQueryOptions<Rocket[]>;
};

const getRocket = async (): Promise<Rocket[]> => {
  return axios
    .get("https://api.spacexdata.com/v3/launches")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export function useGetRocket({ config }: UseRocketOptions) {
  return useQuery({ queryKey: ["get"], queryFn: () => getRocket(), ...config });
}
