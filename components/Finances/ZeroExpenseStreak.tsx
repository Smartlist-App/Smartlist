import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useFetch from "react-fetch-hook";
import dayjs from "dayjs";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";

function ThumbComponent(props: any) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="material-symbols-rounded">local_fire_department</span>
    </SliderThumb>
  );
}

export function ZeroExpenseStreak({ accountId }: { accountId: string }) {
  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: "#f9a825!important",
    height: 3,
    "& .MuiSlider-thumb": {
      height: 35,
      width: 35,
      boxShadow: 0,
      backgroundColor: "#fff!important",
      border: "2px solid #f9a825!important"
    },
    "& .MuiSlider-track": {
      height: 8,
      overflow: "hidden"
    },
    "& .MuiSlider-mark": {
      backgroundColor: "#aaa!important",
      height: 6,
      borderRadius: 9,
      width: 3,
      "&.MuiSlider-markActive": {
        opacity: 1,
        backgroundColor: "rgba(255,255,255,.3)!important"
      }
    },
    "& .MuiSlider-rail": {
      color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8!important",
      opacity: theme.palette.mode === "dark" ? undefined : 1,
      height: 8
    }
  }));
  const { isLoading, data }: any = useFetch(
    "/api/finance/fetchTransactions?" +
      new URLSearchParams({
        access_token: global.session.user.financeToken,
        start_date: dayjs().subtract(15, "day").format("YYYY-MM-DD"),
        end_date: dayjs().add(3, "day").format("YYYY-MM-DD")
      })
  );
  return isLoading ? (
    <Skeleton
      animation="wave"
      variant="rectangular"
      height={150}
      sx={{ borderRadius: 5, mt: 2 }}
    />
  ) : (
    <>
      <Card
        sx={{
          background: "rgba(200, 200, 200, .3)",
          borderRadius: 5,
          boxShadow: 0,
          p: 1,
          mt: 2
        }}
      >
        <CardContent>
          <AirbnbSlider
            components={{ Thumb: ThumbComponent }}
            step={1}
            marks
            min={0}
            disabled
            max={10}
            defaultValue={
              data.transactions.filter((e) => (e.account_id = accountId))[0]
                ? dayjs().diff(
                    data.transactions.filter(
                      (e) => (e.account_id = accountId)
                    )[0].authorized_date,
                    "d"
                  ) || 0
                : 0
            }
          />
          <Typography sx={{ mt: 1 }}>
            You haven't purchased anything for{" "}
            {data.transactions.filter((e) => (e.account_id = accountId))[0]
              ? dayjs().diff(
                  data.transactions.filter((e) => (e.account_id = accountId))[0]
                    .authorized_date,
                  "d"
                ) || 0
              : 0}{" "}
            days
            {(data.transactions.filter((e) => (e.account_id = accountId))[0]
              ? dayjs().diff(
                  data.transactions.filter((e) => (e.account_id = accountId))[0]
                    .authorized_date,
                  "d"
                ) || 0
              : 0) !== 0 ? (
              <> &ndash; Keep it up!</>
            ) : (
              <>&ndash; Don't give up! You can do it!</>
            )}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}