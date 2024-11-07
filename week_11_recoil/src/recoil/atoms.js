import { atom, selector } from "recoil";
export const NetworkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const JobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});
export const MessagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});
export const NotificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkNotificationCount = get(NetworkAtom);
    const notificationCount = get(NotificationAtom);
    const messagingCount = get(MessagingAtom);
    const jobsCount = get(JobsAtom);

    return (
      networkNotificationCount + notificationCount + messagingCount + jobsCount
    );
  },
});
