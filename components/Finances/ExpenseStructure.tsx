import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function ExpenseStructure({ transactions }: any) {
let categories:Array<string> = []
let money:Array<number> = []
transactions.forEach((transaction:any) => {
    transaction.category.forEach((category:string) => categories.push(category))
});

[...new Set(categories)].forEach((category:string) => {
    let filtered = transactions.filter((transaction:any) => transaction.category.includes(category));
    let moneyByCategory = (filtered.map(transaction => transaction.amount))
    moneyByCategory = moneyByCategory.reduce((partialSum, a) => partialSum + a, 0);
    money.push(moneyByCategory)
})

  return (
    <Card
      sx={{
        background:
          global.theme === "dark"
            ? "hsl(240, 11%, 13%)"
            : "rgb(200, 200, 200, .3)",
        borderRadius: 5,
        boxShadow: 0,
        p: 1,
        mt: 2,
      }}
    >
      <Typography sx={{ fontWeight: "600", my: 2, ml: 2, mb: 0 }} variant="h5">
        Expense Structure
      </Typography>
      <CardContent sx={{ p: 0 }}>
        <Pie
          options={{
            layout: {
              padding: {
                left: 60,
                right: 60,
                top: 20,
              },
            },
            plugins: {
              tooltip: {
                cornerRadius: 10,
                caretSize: 0,
                backgroundColor:
                  global.theme === "dark"
                    ? "hsl(240, 11%, 93%)"
                    : "hsl(240, 11%, 20%)",
                bodyColor: global.theme === "dark" ? "#000" : "#fff",
                boxPadding: 10,
                usePointStyle: true,
                padding: 10,
              },
              legend: {
                labels: {
                  padding: 19,
                  pointStyle: "rectRounded",
                  usePointStyle: true,
                },
                reverse: true,
                position: "bottom",
              },
            },
          }}
          data={{
            labels: [...new Set(categories)],
            datasets: [
              {
                label: "# of Votes",
                data: [...money],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 206, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(153, 102, 255)",
                  "rgb(255, 159, 64)",
                ],
                borderWidth: 0,
              },
            ],
          }}
        />
      </CardContent>
    </Card>
  );
}
