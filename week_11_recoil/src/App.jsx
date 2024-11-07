import { RecoilRoot, useRecoilValue } from "recoil";
import {
  JobsAtom,
  MessagingAtom,
  NetworkAtom,
  NotificationAtom,
  totalNotificationSelector,
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
  const notificationCount = useRecoilValue(NotificationAtom);
  const messagingCount = useRecoilValue(MessagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // slightly better way to do it
  // const totalNotificationCount = useMemo(() => {
  //   return (
  //     networkNotificationCount + notificationCount + messagingCount + jobsCount
  //   );
  // }, [networkNotificationCount, notificationCount, messagingCount, jobsCount]);

  // ugly way to code
  // const totalNotificationCount =
  //   networkNotificationCount + notificationCount + messagingCount + jobsCount;

  return (
    <>
      <button>Home</button>

      <button>
        MyNetwork (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs {jobsCount}</button>
      <button>
        Messagging {messagingCount >= 50 ? "49+" : messagingCount}
      </button>
      <button>Notification {notificationCount}</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
