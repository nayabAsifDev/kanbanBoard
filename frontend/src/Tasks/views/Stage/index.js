import React from "react";
import { Draggable } from "react-beautiful-dnd";
import EditableTask from "Tasks/views/EditableTask";
import Icon from "Components/Icon";
import { Tooltip } from "@material-tailwind/react";

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  zIndex: 2,
  background: isDragging ? "#f8f9fa" : "white",
  ...draggableStyle
});

function Stage({ data, stage, removeTask, updateTask }) {
  return (
    <div className="p-2 max-h-[calc(100vh-200px)] overflow-y-auto">
      <div className="grid gap-2">
        {data.map((task, index) => (
          <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided, snapshot) => (
              <div
                className="bg-kanban_bg-card rounded-lg p-2"
                style={getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                )}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div className="grid grid-cols-12 gap-[2px]">
                  <div className={task.text ? "col-span-10" : "col-span-12"}>
                    <EditableTask
                      updateTask={updateTask}
                      removeTask={removeTask}
                      task={task}
                      stage={stage}
                    />
                  </div>
                  {task.text && (
                    <React.Fragment>
                      <div className="col-span-1">
                        <Tooltip content={new Date(task.updated).toLocaleString()} placement="top">
                          <button>
                            <Icon type="info" width="14" height="14" className="text-kanban_txt mt-[1px]" />
                          </button>
                        </Tooltip>
                      </div>
                      <div className="col-span-1 self-center">
                        <div
                          className="cursor-pointer z-10"
                          onClick={() => removeTask({ taskID: task.id, stage })}
                        >
                          <Icon type="remove" width="12" height="12" className="text-kanban_txt" />
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
            )}
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default Stage;
