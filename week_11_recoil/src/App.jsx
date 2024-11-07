import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
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
  const notificationCount = useRecoilValue(NotificationAtom);
  const [messagingCount, setMessagingCount] = useRecoilState(MessagingAtom);

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

      <button
        onClick={() => {
          setMessagingCount(messagingCount + 1);
        }}
      >
        Me
      </button>
    </>
  );
}

export default App;
