import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Paper from "@mui/material/Paper";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // import plugin
import { Lists } from "../layout/dashboard/Lists";
import { RecentItems } from "../layout/dashboard/RecentItems";
import { ListItems } from "../layout/dashboard/ListItems";

dayjs.extend(relativeTime);

export default function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mr: -2 }}>
        <Masonry columns={{ xs: 1, sm: 2 }}>
          <Paper key={1} sx={{ boxShadow: 0, p: 0 }}>
            <Lists />
          </Paper>
          <Paper key={2} sx={{ boxShadow: 0 }}>
            <RecentItems />
          </Paper>
          <Paper key={3} sx={{ boxShadow: 0, p: 0 }}>
            <ListItems
              emptyText="Your shopping list is empty"
              emptyImage="https://ouch-cdn2.icons8.com/9ZkS5oUxGuBU8xmECIcW5iRDv56KpODUsTuuykys3NU/rs:fit:256:252/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzk3/LzUxZTU5NjM3LWVk/YzQtNDM0My04ODNl/LWZhMmNkM2EzMmQ4/YS5zdmc.png"
              title={"Shopping List"}
              parent={-2}
            />
          </Paper>
          <Paper key={4} sx={{ boxShadow: 0, p: 0 }}>
            <ListItems
              emptyText="Great job! You've finished all your tasks!"
              emptyImage="https://ouch-cdn2.icons8.com/ILJ4wkr6UuNv9n7wnbxnxKRGFEvqc0_vKV13mA4Q0wM/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTU5/L2YwMDczNGQ4LWFj/NjQtNGQyNS1hNTU2/LTdjNTdkZTY3ZWQz/MS5zdmc.png"
              title={"Reminders"}
              parent={-1}
            />
          </Paper>
        </Masonry>
      </Box>
    </Box>
  );
}