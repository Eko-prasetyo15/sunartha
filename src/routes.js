import Home from "./View/Home"
import Branch from "./View/BranchList"


var LayoutRoute = [
    {
        path: "/",
        exact: true,
        name: "Home",
        component: Home
    },
    {
        path: "/branch-list",
        name: "Branch",
        component: Branch
    },
];

export default LayoutRoute