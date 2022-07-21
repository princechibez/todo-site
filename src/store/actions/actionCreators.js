import * as actionTypes from "../index";

export const registerTask = (task) => {
    return {
        type: actionTypes.REGISTER_TASK,
        parsedTask: task
    }
}