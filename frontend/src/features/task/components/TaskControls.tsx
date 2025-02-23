import { Box, IconButton, Tooltip } from "@mui/material";
import {
  VisibilityOutlined,
  AccessTime,
  EditNote,
  FormatListBulleted,
  DeleteOutlined,
} from "@mui/icons-material";
import { FC } from "react";

type TaskControlsProp = {
  handleUpdateBtn: () => void;
  handleDeleteBtn: () => void;
  handleViewBtn: () => void;
};

const TaskControls: FC<TaskControlsProp> = ({
  handleUpdateBtn,
  handleDeleteBtn,
  handleViewBtn,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Tooltip title="Update task details">
        <IconButton
          color="primary"
          onClick={handleUpdateBtn}
          aria-label="approve"
        >
          <EditNote />
        </IconButton>
      </Tooltip>
      <Tooltip title="View details">
        <IconButton
          color="primary"
          onClick={handleViewBtn}
          aria-label="details"
        >
          <FormatListBulleted />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete Task">
        <IconButton
          color="error"
          onClick={handleDeleteBtn}
          aria-label="details"
        >
          <DeleteOutlined />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default TaskControls;
