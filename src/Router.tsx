import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            /** 추가적으로 라우터를 만드는것이 아닌 자식을 통해서 만들 수 있음! */
            path: "Followers",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

// git push 를 하던도중 에러발생
// error: failed to push some refs to 'https://github.com/hahwul/a2sv.git'
// hint: Updates were rejected because the tip of your current branch is behind
// hint: its remote counterpart. Merge the remote changes (e.g. 'git pull')
// hint: before pushing again.
// hint: See the 'Note about fast-forwards' in 'git push --help' for details.
// git push --force 로 해결하긴 했지만 원인은 무엇인지, 어떠한 현상인지 알아봐야 될것같음
