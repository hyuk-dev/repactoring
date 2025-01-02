const titleStyle = {
    textAlign: "center",
}
  
const mainStyle = {
    display: "grid",
    gridTemplateAreas: `"planController userStatus"
    "expected working finished"`,
}

const planControllerStyle = {
    width: "50rem",
    gridArea: "planController",
}

const userStatusStyle = {
    gridArea: "userStatus",
}

const expectedStyle = {
    gridArea: "expected",
}

const workingStyle = {
    gridArea: "working",
}

const finishedStyle = {
    gridArea: "finished",
}

export const appStyle = {
    titleStyle,
    mainStyle,
    planControllerStyle,
    userStatusStyle,
    expectedStyle,
    workingStyle,
    finishedStyle,
}
