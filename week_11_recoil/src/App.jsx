import { RecoilRoot, useRecoilValue } from "recoil";
import {
  JobsAtom,
  MessagingAtom,
  NetworkAtom,
  NotificationAtom,
} from "./recoil/atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(NetworkAtom);
  const jobsCount = useRecoilValue(JobsAtom);
  const messagingCount = useRecoilValue(MessagingAtom);
  const notificationCount = useRecoilValue(NotificationAtom);
  return (
    <>
      <button>Home</button>
      <button>
        MyNetwork (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs {jobsCount}</button>
      <button>Messagging {messagingCount}</button>
      <button>Notification {notificationCount}</button>
      <button>Me</button>
    </>
  );
}

export default App;
